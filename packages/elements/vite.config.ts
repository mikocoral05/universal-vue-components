import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root,
  plugins: [
    vue({ customElement: true }),
    dts({
      tsconfigPath: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
      insertTypesEntry: true,
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'UniversalVueElements',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs',
      cssFileName: 'style'
    },
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    emptyOutDir: true
  }
})
