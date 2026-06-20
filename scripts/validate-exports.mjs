import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'

const packages = ['vue', 'elements', 'tokens', 'icons', 'utilities', 'metadata']
const entryFields = ['main', 'module', 'types', 'style', 'unpkg', 'jsdelivr']

function collectExportTargets(value, targets = []) {
  if (typeof value === 'string') targets.push(value)
  else if (value && typeof value === 'object') {
    for (const child of Object.values(value)) collectExportTargets(child, targets)
  }
  return targets
}

function collectDeclarationFiles(directory, files = []) {
  if (!existsSync(directory)) return files
  for (const name of readdirSync(directory)) {
    const path = join(directory, name)
    if (statSync(path).isDirectory()) collectDeclarationFiles(path, files)
    else if (name.endsWith('.d.ts')) files.push(path)
  }
  return files
}

for (const name of packages) {
  const packageDir = `packages/${name}`
  const manifestPath = join(packageDir, 'package.json')
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))

  for (const file of manifest.files ?? []) {
    if (!existsSync(join(packageDir, file))) {
      throw new Error(`${name}: published file or directory is missing: ${file}`)
    }
  }

  const targets = collectExportTargets(manifest.exports)
  for (const field of entryFields) {
    if (typeof manifest[field] === 'string') targets.push(manifest[field])
  }

  for (const target of new Set(targets)) {
    if (!target.startsWith('./')) continue
    const absolute = join(dirname(manifestPath), target)
    if (!existsSync(absolute)) throw new Error(`${name}: exported target is missing: ${target}`)
  }

  if (name === 'vue' || name === 'elements') {
    for (const declarationFile of collectDeclarationFiles(join(packageDir, 'dist'))) {
      const declaration = readFileSync(declarationFile, 'utf8')
      if (declaration.includes('@universal-vue/components')) {
        throw new Error(`${name}: declaration output exposes the private @universal-vue/components package: ${declarationFile}`)
      }
    }
  }
}

console.log('All published package entry points, exported files, and public declarations are valid.')
