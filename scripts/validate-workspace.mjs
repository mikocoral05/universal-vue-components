import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const required = ['pnpm-workspace.yaml','apps/website/package.json','packages/vue/package.json','packages/elements/package.json','packages/tokens/package.json']
const missing = required.filter((file) => !existsSync(resolve(file)))
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`)
const root = JSON.parse(readFileSync('package.json','utf8'))
if (!root.private) throw new Error('Root package must remain private')
for (const lock of ['apps/website/package-lock.json','apps/website/pnpm-lock.yaml']) {
  if (existsSync(lock)) throw new Error(`Remove nested lockfile: ${lock}`)
}
console.log('Workspace structure is valid.')
