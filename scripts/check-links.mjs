import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve('apps/website/.output/public')
if (!existsSync(root)) throw new Error('Generate the website first with pnpm generate:website')

const html = []
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path)
    else if (path.endsWith('.html')) html.push(path)
  }
}
walk(root)

const broken = []
for (const file of html) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(/href=["'](\/[^"']*?)["']/g)) {
    const href = match[1].split('#')[0].split('?')[0]
    if (!href || href.startsWith('/_nuxt/')) continue
    const relative = href.replace(/^\//, '')
    const target = href === '/' ? join(root, 'index.html') : join(root, relative, 'index.html')
    const direct = join(root, relative)
    if (!existsSync(target) && !existsSync(direct)) broken.push(`${file}: ${href}`)
  }
}
if (broken.length) throw new Error(`Broken internal links:\n${broken.join('\n')}`)
console.log(`Checked ${html.length} generated HTML files.`)
