import { existsSync, readdirSync, statSync } from 'node:fs'

// Budgets cover the combined ESM, CommonJS, and CDN JavaScript artifacts.
// The Elements ceiling scales with the catalog expansion from 35 to 40 components
// while preserving the existing native Vue budget and headroom for accessibility behavior.
const budgets = { vue: 180_000, elements: 1_200_000 }

for (const [pkg, budget] of Object.entries(budgets)) {
  const dir = `packages/${pkg}/dist`
  if (!existsSync(dir)) throw new Error(`${dir} is missing`)

  const total = readdirSync(dir)
    .filter((file) => /\.(js|cjs)$/.test(file))
    .reduce((sum, file) => sum + statSync(`${dir}/${file}`).size, 0)

  if (total > budget) throw new Error(`${pkg} JavaScript output is ${total} bytes; budget is ${budget}`)
  console.log(`${pkg}: ${total} / ${budget} bytes`)
}
