# @universal-vue/vue

```bash
npm install @universal-vue/vue
```

```ts
import { createApp } from 'vue'
import UniversalVue from '@universal-vue/vue'
import '@universal-vue/vue/style.css'

createApp(App).use(UniversalVue).mount('#app')
```

Components may also be imported individually for tree shaking:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { UvCommandPalette, UvFormField, UvStepper, UvTimeline } from '@universal-vue/vue'

const step = ref('integrate')
const steps = [{ id: 'install', label: 'Install' }, { id: 'integrate', label: 'Integrate' }]
const commands = [{ id: 'docs', label: 'Open documentation' }]
const timeline = [{ id: 1, title: 'Package connected', status: 'success' }]
</script>

<template>
  <UvFormField v-slot="slot" label="Repository URL"><input :id="slot.controlId"></UvFormField>
  <UvStepper v-model="step" :steps="steps" />
  <UvCommandPalette mode="inline" :commands="commands" />
  <UvTimeline :items="timeline" />
</template>
```
