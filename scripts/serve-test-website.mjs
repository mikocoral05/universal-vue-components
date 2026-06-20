process.env.NITRO_HOST ??= '127.0.0.1'
process.env.NITRO_PORT ??= '3000'

await import('../apps/website/.output/server/index.mjs')
