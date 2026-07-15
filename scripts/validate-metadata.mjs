import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const sourceRoot = 'packages/components/src'
const folders = readdirSync(sourceRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
const expected = folders.flatMap((entry) => {
  const indexPath = join(sourceRoot, entry.name, 'index.ts')
  try {
    const index = readFileSync(indexPath, 'utf8')
    return [...index.matchAll(/export \{ default as (Uv\w+) \}/g)].map((match) => match[1])
  } catch { return [] }
}).sort()
const metadata = readFileSync('packages/metadata/src/components.ts', 'utf8')
const names = [...metadata.matchAll(/name: '(Uv[^']+)'/g)].map((match) => match[1])
const slugs = [...metadata.matchAll(/slug: '([^']+)'/g)].map((match) => match[1])
const tags = [...metadata.matchAll(/tagName: '([^']+)'/g)].map((match) => match[1])
const duplicates = (values) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
const missing = expected.filter((name) => !names.includes(name))
const unknown = names.filter((name) => !expected.includes(name))
if (missing.length || unknown.length) throw new Error(`Metadata mismatch. Missing: ${missing.join(', ') || 'none'}; unknown: ${unknown.join(', ') || 'none'}`)
for (const [label, values] of [['names', names], ['slugs', slugs], ['tags', tags]]) {
  const found = duplicates(values)
  if (found.length) throw new Error(`Duplicate metadata ${label}: ${found.join(', ')}`)
}
if (names.length !== expected.length || slugs.length !== expected.length || tags.length !== expected.length) throw new Error('Metadata field counts do not match component count.')
console.log(`Metadata includes all ${expected.length} implemented components with unique names, slugs, and tags.`)
