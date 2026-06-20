import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { basename, join, resolve } from 'node:path'

const root = resolve('.')
const tarballDir = join(root, 'artifacts/npm')
const fixtureRoot = join(root, 'artifacts/packed-fixtures')
const fixtureExamples = join(fixtureRoot, 'examples')


function runPnpm(args, options = {}) {
  const pnpmExecPath = process.env.npm_execpath
  const baseOptions = { stdio: 'inherit', ...options }

  if (pnpmExecPath && /\.(?:c?js|mjs)$/i.test(pnpmExecPath)) {
    execFileSync(process.execPath, [pnpmExecPath, ...args], baseOptions)
    return
  }

  if (process.platform === 'win32') {
    execFileSync(process.env.ComSpec ?? 'cmd.exe', ['/d', '/s', '/c', 'pnpm.cmd', ...args], baseOptions)
    return
  }

  execFileSync('pnpm', args, baseOptions)
}

if (!existsSync(tarballDir)) throw new Error('Run pnpm pack:local first')
rmSync(fixtureRoot, { recursive: true, force: true })
mkdirSync(fixtureExamples, { recursive: true })

const tarballs = readdirSync(tarballDir).filter((name) => name.endsWith('.tgz'))
function tarballFor(packageName) {
  const marker = packageName.replace('@universal-vue/', 'universal-vue-').replaceAll('/', '-')
  const found = tarballs.find((name) => name.startsWith(marker))
  if (!found) throw new Error(`No tarball found for ${packageName}`)
  return found
}

const fixtures = {
  vue: '@universal-vue/vue',
  nuxt: '@universal-vue/vue',
  react: '@universal-vue/elements',
  angular: '@universal-vue/elements',
  svelte: '@universal-vue/elements',
  'plain-html': '@universal-vue/elements'
}

const ignoredDirectories = new Set([
  'node_modules',
  'dist',
  '.nuxt',
  '.output',
  '.angular',
  '.vite',
  'coverage'
])

for (const [name, packageName] of Object.entries(fixtures)) {
  const source = join(root, 'examples', name)
  const destination = join(fixtureExamples, name)
  cpSync(source, destination, {
    recursive: true,
    filter: (sourcePath) => !ignoredDirectories.has(basename(sourcePath))
  })

  const manifestPath = join(destination, 'package.json')
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  manifest.dependencies ??= {}
  manifest.dependencies[packageName] = `file:../../../npm/${tarballFor(packageName)}`
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
}

cpSync(join(root, 'tsconfig.base.json'), join(fixtureRoot, 'tsconfig.base.json'))
writeFileSync(
  join(fixtureRoot, 'package.json'),
  `${JSON.stringify({ name: 'universal-vue-packed-fixtures', private: true, packageManager: 'pnpm@11.7.0' }, null, 2)}\n`
)
writeFileSync(
  join(fixtureRoot, 'pnpm-workspace.yaml'),
  [
    'packages:',
    "  - 'examples/*'",
    'allowBuilds:',
    "  '@parcel/watcher': true",
    '  esbuild: true',
    '  lmdb: true',
    '  msgpackr-extract: true',
    ''
  ].join('\n')
)

runPnpm(['install', '--no-frozen-lockfile'], { cwd: fixtureRoot })

for (const name of Object.keys(fixtures)) {
  runPnpm(['--dir', `examples/${name}`, 'build'], { cwd: fixtureRoot })
}

console.log('All packed consumer fixtures built successfully.')
