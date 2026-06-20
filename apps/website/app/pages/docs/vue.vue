<script setup lang="ts">useSeoMeta({title:'Native Vue usage',description:'Use Universal Vue Components in Vue 3, Nuxt, and Quasar.'});const plugin=`import { createApp } from 'vue'
import UniversalVue from '@universal-vue/vue'
import '@universal-vue/vue/style.css'

createApp(App).use(UniversalVue).mount('#app')`;const direct=`<script setup lang="ts">
import { UvButton, UvInput } from '@universal-vue/vue'
import '@universal-vue/vue/style.css'
${'</'}script>`</script>
<template><div class="page"><div class="site-container docs-layout"><DocsSidebar/><article class="prose"><span class="eyebrow">Native package</span><h1>Vue, Nuxt, and Quasar</h1><p>The native package preserves Vue props, typed emits, slots, v-model, and tree shaking.</p><h2>Plugin installation</h2><CodeBlock :code="plugin"/><h2>Direct imports</h2><CodeBlock :code="direct" language="vue"/><h2>Nuxt</h2><p>Add the stylesheet to <code>nuxt.config.ts</code>, then import components in pages or create a plugin for global registration.</p><CodeBlock code="export default defineNuxtConfig({
  css: ['@universal-vue/vue/style.css']
})"/></article></div></div></template>
