import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root,
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/cdn.ts', import.meta.url)),
      name: 'UniversalVueElements',
      formats: ['iife'],
      fileName: () => 'universal-vue.min.js',
      cssFileName: 'style'
    },
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: false,
    minify: 'esbuild'
  }
})
