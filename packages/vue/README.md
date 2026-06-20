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
import { UvDivider, UvDropdownMenu, UvSlider } from '@universal-vue/vue'
import { ref } from 'vue'

const coverage = ref(72)
const menuOpen = ref(false)
</script>

<template>
  <UvSlider v-model="coverage" label="Coverage" value-suffix="%" show-value />
  <UvDivider label="Actions" />
  <UvDropdownMenu v-model="menuOpen" label="More actions">
    <button type="button" role="menuitem">Preview</button>
  </UvDropdownMenu>
</template>
```
