import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['**/node_modules/**','**/dist/**','**/.nuxt/**','**/.output/**','**/coverage/**','**/playwright-report/**','**/test-results/**','**/artifacts/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{ts,vue,mts,cts}'],
    languageOptions: { parserOptions: { parser: tseslint.parser, extraFileExtensions: ['.vue'], sourceType: 'module' } },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
      'no-undef': 'off',
      'vue/require-default-prop': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/html-indent': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/no-v-html': 'off'
    }
  }
,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { console: 'readonly', process: 'readonly', URL: 'readonly', document: 'readonly', window: 'readonly', customElements: 'readonly', navigator: 'readonly', setTimeout: 'readonly' } }
  }
]
