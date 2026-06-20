import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@universal-vue/components': fileURLToPath(new URL('./packages/components/src/index.ts', import.meta.url)),
      '@universal-vue/metadata': fileURLToPath(new URL('./packages/metadata/src/index.ts', import.meta.url)),
      '@universal-vue/utilities': fileURLToPath(new URL('./packages/utilities/src/index.ts', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom', globals: true, passWithNoTests: false,
    include: ['packages/**/*.{test,spec}.{ts,tsx}','tests/unit/**/*.{test,spec}.{ts,tsx}'],
    coverage: { reporter: ['text','html','lcov'], include: ['packages/components/src/**/*.{ts,vue}'] }
  }
})
