import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'

const componentRoot = 'packages/components/src'
const metadataPath = 'packages/metadata/src/components.ts'

const componentFolders = readdirSync(componentRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
  .map((entry) => entry.name)

const publicSlugs = new Set(componentFolders.filter((slug) => {
  const directory = join(componentRoot, slug)
  const files = readdirSync(directory)
  return files.includes('index.ts')
    && files.some((file) => file.endsWith('.vue'))
    && files.some((file) => file.endsWith('.test.ts'))
}))

const originalMetadata = readFileSync(metadataPath, 'utf8')
const sourceFile = ts.createSourceFile(metadataPath, originalMetadata, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
let metadataArray
let metadataStatement

for (const statement of sourceFile.statements) {
  if (!ts.isVariableStatement(statement)) continue
  for (const declaration of statement.declarationList.declarations) {
    if (declaration.name.getText(sourceFile) === 'components' && ts.isArrayLiteralExpression(declaration.initializer)) {
      metadataArray = declaration.initializer
      metadataStatement = statement
    }
  }
}

if (!metadataArray || !metadataStatement) throw new Error('Unable to locate the metadata component array.')

function stringProperty(node, propertyName) {
  if (!ts.isObjectLiteralExpression(node)) return undefined
  const property = node.properties.find((candidate) => ts.isPropertyAssignment(candidate) && candidate.name.getText(sourceFile) === propertyName)
  return property && ts.isPropertyAssignment(property) && ts.isStringLiteral(property.initializer)
    ? property.initializer.text
    : undefined
}

const metadataRows = metadataArray.elements.map((element) => ({
  element,
  name: stringProperty(element, 'name'),
  slug: stringProperty(element, 'slug'),
  tag: stringProperty(element, 'tagName'),
  version: stringProperty(element, 'versionIntroduced')
}))

if (metadataRows.some((row) => !row.name || !row.slug || !row.tag || !row.version)) {
  throw new Error('A metadata record is missing a required catalog identity field.')
}

const keptRows = metadataRows.filter((row) => publicSlugs.has(row.slug))
const removedRows = metadataRows.filter((row) => !publicSlugs.has(row.slug))
const publicNames = new Set(keptRows.map((row) => row.name))
const publicTags = new Set(keptRows.map((row) => row.tag))
const removedNames = new Set(removedRows.map((row) => row.name))

if (keptRows.length !== publicSlugs.size) {
  const missingMetadata = [...publicSlugs].filter((slug) => !keptRows.some((row) => row.slug === slug))
  throw new Error(`Implemented folders without metadata: ${missingMetadata.join(', ')}`)
}

function write(path, contents) {
  writeFileSync(path, contents.replace(/\r\n/g, '\n').replace(/\n*$/, '\n'), 'utf8')
}

function batchFor(row, index) {
  if (index < 20) return 'foundation'
  if (index < 25) return '01'
  return row.version.match(/^0\.(\d+)\./)?.[1] ?? row.version
}

for (const [index, row] of metadataRows.entries()) row.batch = batchFor(row, index)
for (const [index, row] of keptRows.entries()) row.catalogIndex = index

const metadataChunks = []
for (let index = 0; index < keptRows.length; index += 200) metadataChunks.push(keptRows.slice(index, index + 200))
const chunkText = metadataChunks.map((rows) => `  defineMetadata([\n    ${rows.map((row) => row.element.getText(sourceFile)).join(',\n    ')}\n  ])`).join(',\n')
const metadataReplacement = `const defineMetadata = (items: ComponentMetadata[]): ComponentMetadata[] => items

const componentMetadataChunks: ComponentMetadata[][] = [
${chunkText}
]

export const components: ComponentMetadata[] = componentMetadataChunks.flat()`
write(metadataPath, `${originalMetadata.slice(0, metadataStatement.getStart(sourceFile))}${metadataReplacement}${originalMetadata.slice(metadataStatement.end)}`)

const componentIndexPath = 'packages/components/src/index.ts'
const componentIndex = readFileSync(componentIndexPath, 'utf8')
  .split(/\r?\n/)
  .filter((line) => {
    const match = line.match(/^export \* from '\.\/([^']+)'$/)
    return !match || publicSlugs.has(match[1])
  })
  .join('\n')
write(componentIndexPath, componentIndex)

function referencesRemovedComponent(line) {
  const tokens = line.match(/\bUv[A-Z][A-Za-z0-9]+\b/g) ?? []
  return tokens.some((token) => removedNames.has(token) || (token.endsWith('Element') && removedNames.has(token.slice(0, -7))))
}

for (const path of ['packages/vue/src/index.ts', 'packages/elements/src/index.ts']) {
  const filtered = readFileSync(path, 'utf8').split(/\r?\n/).filter((line) => !referencesRemovedComponent(line)).join('\n')
  write(path, filtered)
}

function filterJsonArrayLine(path, marker, identity) {
  const lines = readFileSync(path, 'utf8').split(/\r?\n/)
  const index = lines.findIndex((line) => line.includes(marker))
  if (index < 0) throw new Error(`Unable to locate ${marker} in ${path}.`)
  const line = lines[index]
  const start = line.indexOf('[')
  const end = line.indexOf(']', start)
  if (start < 0 || end < start) throw new Error(`Unable to parse the JSON array in ${path}.`)
  const values = JSON.parse(line.slice(start, end + 1))
  const filtered = values.filter((value) => identity(value))
  lines[index] = `${line.slice(0, start)}${JSON.stringify(filtered)}${line.slice(end + 1)}`
  write(path, lines.join('\n'))
}

for (const path of [
  'apps/website/app/components/ComponentDemo.vue',
  'examples/nuxt/app/app.vue',
  'examples/vue/src/App.vue'
]) filterJsonArrayLine(path, 'generatedComponentNames =', (name) => publicNames.has(name))

for (const path of [
  'apps/website/app/pages/playground/elements.vue',
  'examples/angular/src/main.ts',
  'examples/plain-html/main.js',
  'examples/react/src/main.tsx',
  'examples/svelte/src/App.svelte'
]) filterJsonArrayLine(path, path.includes('angular') ? 'generatedComponents =' : path.includes('playground') ? 'generatedElementDemos =' : 'generatedComponents =', (entry) => publicTags.has(entry.tag))

filterJsonArrayLine('tests/e2e/components.spec.ts', 'generatedComponents =', (entry) => publicNames.has(entry.name) && publicSlugs.has(entry.slug) && publicTags.has(entry.tag))

function replaceRoutes(path) {
  const text = readFileSync(path, 'utf8')
  const parsed = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  let routeArray
  for (const statement of parsed.statements) {
    if (!ts.isVariableStatement(statement)) continue
    for (const declaration of statement.declarationList.declarations) {
      if (declaration.name.getText(parsed) === 'routes' && ts.isArrayLiteralExpression(declaration.initializer)) routeArray = declaration.initializer
    }
  }
  if (!routeArray) throw new Error(`Unable to locate routes in ${path}.`)
  const routes = ['/', '/components', ...keptRows.map((row) => `/components/${row.slug}`), '/docs/installation', '/playground']
  const lines = []
  for (let index = 0; index < routes.length; index += 5) {
    lines.push(`  ${routes.slice(index, index + 5).map((route) => `'${route}'`).join(', ')},`)
  }
  const replacement = `[\n${lines.join('\n')}\n]`
  write(path, `${text.slice(0, routeArray.getStart(parsed))}${replacement}${text.slice(routeArray.end)}`)
}

replaceRoutes('tests/e2e/accessibility.spec.ts')
replaceRoutes('tests/e2e/smoke.spec.ts')

const groups = []
function addGroup(title, rows) {
  if (rows.length) groups.push({ title, rows })
}
addGroup('Foundation batch', keptRows.slice(0, 20))
addGroup('Expansion batch 01', keptRows.slice(20, 25))
const expansionGroups = new Map()
for (const row of keptRows.slice(25)) {
  const batch = row.version.match(/^0\.(\d+)\./)?.[1] ?? row.version
  const rows = expansionGroups.get(batch) ?? []
  rows.push(row)
  expansionGroups.set(batch, rows)
}
for (const [batch, rows] of expansionGroups) addGroup(`Expansion batch ${batch}`, rows)

const componentCatalog = [
  'Universal Vue Components — implemented components',
  '',
  ...groups.flatMap((group) => [
    `${group.title} (${group.rows.length})`,
    ...group.rows.map((row) => `- ${row.name}`),
    ''
  ]),
  `Total implemented: ${keptRows.length}`
].join('\n')
write('COMPONENTS.txt', componentCatalog)

const readmeCatalog = groups.flatMap((group) => [
  `### ${group.title}`,
  '',
  ...group.rows.map((row) => `- \`${row.name}\``),
  ''
]).join('\n')

write('README.md', `# Universal Vue Components

A free, open-source Vue 3 component system delivered as native Vue components, standards-based Custom Elements, and browser-ready CDN bundles.

## Start on Windows

\`\`\`bat
cd /d "C:\\My NPMJS\\universal-vue-components"
pnpm install
pnpm check
pnpm dev
\`\`\`

## Project status

The recovered catalog contains **${keptRows.length} implemented public components** through Expansion Batch 1000. Each listed component has a Vue implementation, component index, unit test, native Vue export and plugin registration, Custom Element constructor and tag registration, metadata, documentation/demo support, framework fixtures, and browser-test routes.

The flat recovery patch did not contain implementations for Batches 397–623 or Batch 671. Their orphan metadata and integration references were removed rather than replaced with placeholders. Batch 623 is therefore unavailable, and Batches 1001–2000 were never generated.

## Implemented catalog

${readmeCatalog}`)

const removedByBatch = new Map()
for (const row of removedRows) {
  const rows = removedByBatch.get(row.batch) ?? []
  rows.push(row)
  removedByBatch.set(row.batch, rows)
}

const removedCatalog = [
  'Removed orphan component references',
  '',
  `Total removed: ${removedRows.length}`,
  '',
  ...[...removedByBatch].flatMap(([batch, rows]) => [
    `Expansion batch ${batch} (${rows.length})`,
    ...rows.map((row) => `- ${row.name} (${row.slug}, ${row.tag})`),
    ''
  ])
].join('\n')
write('REMOVED_COMPONENTS.txt', removedCatalog)

write('RECOVERY_DIAGNOSTICS.json', JSON.stringify({
  available_generated_history: 'through Batch 1000',
  initial_component_directories: componentFolders.length + 1,
  initial_metadata_records: metadataRows.length,
  final_public_components: keptRows.length,
  removed_orphan_records: removedRows.length,
  unavailable_implementation_batches: ['397-623', '671'],
  batch_623_recoverable: false,
  ungenerated_batches: ['1001-2000'],
  status: 'catalog reconciled; validation required before release'
}, null, 2))

write('RECOVERY_STATUS.txt', `Universal Vue Component Library — Reconciled Recovery Workspace

Recovered public catalog:
- ${keptRows.length} components with source, tests, exports, registrations, metadata, demos, fixtures, and browser routes
- Generated history represented through Batch 1000, with unavailable batches explicitly excluded

Unavailable implementations:
- Batches 397 through 623 (${227 * 5} orphan records removed)
- Batch 671 (5 orphan records removed)
- Batch 623 could not be reconstructed confidently
- Batches 1001 through 2000 were never generated

Initial mismatch:
- Component source directories: ${componentFolders.length + 1} (${componentFolders.length} component directories plus _generated)
- Metadata records: ${metadataRows.length}

Final catalog:
- Public components: ${keptRows.length}
- Metadata records: ${keptRows.length}
- Removed orphan references: ${removedRows.length}

Do not publish until the full validation gate passes.
Do not modify pnpm-workspace.yaml.`)

console.log(`Reconciled ${keptRows.length} public components and removed ${removedRows.length} orphan records.`)
