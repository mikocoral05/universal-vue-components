import { mkdirSync, rmSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

function runPnpm(args) {
  const pnpmExecPath = process.env.npm_execpath
  const options = { stdio: 'inherit' }

  if (pnpmExecPath && /\.(?:c?js|mjs)$/i.test(pnpmExecPath)) {
    execFileSync(process.execPath, [pnpmExecPath, ...args], options)
    return
  }

  if (process.platform === 'win32') {
    execFileSync(process.env.ComSpec ?? 'cmd.exe', ['/d', '/s', '/c', 'pnpm.cmd', ...args], options)
    return
  }

  execFileSync('pnpm', args, options)
}

const out = 'artifacts/npm'
rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })

for (const pkg of ['tokens', 'icons', 'utilities', 'metadata', 'vue', 'elements']) {
  runPnpm(['--dir', `packages/${pkg}`, 'pack', '--pack-destination', `../../${out}`])
}

console.log(`Tarballs created in ${out}`)
