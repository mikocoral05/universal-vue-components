import { cpSync, mkdirSync, rmSync } from 'node:fs'
rmSync(new URL('../dist', import.meta.url), { recursive: true, force: true })
mkdirSync(new URL('../dist/themes', import.meta.url), { recursive: true })
cpSync(new URL('../src/index.css', import.meta.url), new URL('../dist/index.css', import.meta.url))
cpSync(new URL('../src/reset.css', import.meta.url), new URL('../dist/reset.css', import.meta.url))
cpSync(new URL('../src/themes/light.css', import.meta.url), new URL('../dist/themes/light.css', import.meta.url))
cpSync(new URL('../src/themes/dark.css', import.meta.url), new URL('../dist/themes/dark.css', import.meta.url))
console.log('Built token CSS.')
