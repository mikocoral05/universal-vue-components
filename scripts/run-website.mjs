import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'

const command = process.argv[2]
const websiteDir = resolve('apps/website')
const websitePackage = resolve(websiteDir, 'package.json')

if (!command) {
  console.error('Usage: node scripts/run-website.mjs <dev|build|generate|typecheck>')
  process.exit(1)
}

if (!existsSync(websitePackage)) {
  console.error('\nThe Nuxt website source has not been copied into apps/website yet.')
  console.error('Read apps/website/README.md, copy the completed website there, then run pnpm install.\n')
  process.exit(1)
}

const result = spawnSync('pnpm', [command], {
  cwd: websiteDir,
  stdio: 'inherit',
  shell: process.platform === 'win32'
})

process.exit(result.status ?? 1)
