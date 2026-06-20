<script setup lang="ts">
import { UvAlert, UvBadge, UvButton, UvInput, UvSwitch } from '@universal-vue/vue'
import type { UvButtonVariant } from '@universal-vue/vue'

const route = useRoute()
const isPlaygroundIndex = computed(() => route.path === '/playground' || route.path === '/playground/')

const component = ref('button')
const variant = ref<UvButtonVariant>('primary')
const label = ref('Save changes')
const disabled = ref(false)
const inputValue = ref('Universal Vue')
const switchValue = ref(true)

useSeoMeta({
  title: 'Playground',
  description: 'Try Universal Vue Components and inspect their APIs.'
})
</script>

<template>
  <NuxtPage v-if="!isPlaygroundIndex" />

  <div v-else class="page">
    <div class="site-container">
      <header class="page-heading">
        <span class="eyebrow">Interactive workspace</span>
        <h1>Component playground</h1>
        <p>Change props and preview the real native Vue package.</p>
      </header>

      <div class="playground-grid">
        <section class="playground-preview">
          <UvButton v-if="component === 'button'" :variant="variant" :disabled="disabled">
            {{ label }}
          </UvButton>
          <UvInput
            v-else-if="component === 'input'"
            v-model="inputValue"
            label="Project name"
            clearable
          />
          <UvSwitch
            v-else-if="component === 'switch'"
            v-model="switchValue"
            label="Enable notifications"
          />
          <UvAlert
            v-else-if="component === 'alert'"
            :tone="variant === 'danger' ? 'danger' : 'info'"
            title="Preview alert"
          >
            {{ label }}
          </UvAlert>
          <UvBadge v-else :tone="variant === 'danger' ? 'danger' : 'primary'">
            {{ label }}
          </UvBadge>
        </section>

        <aside class="playground-controls">
          <div class="control-row">
            <label for="component">Component</label>
            <select id="component" v-model="component">
              <option value="button">UvButton</option>
              <option value="input">UvInput</option>
              <option value="switch">UvSwitch</option>
              <option value="alert">UvAlert</option>
              <option value="badge">UvBadge</option>
            </select>
          </div>

          <div class="control-row">
            <label for="label">Label</label>
            <input
              id="label"
              v-model="label"
              class="uv-field__input"
              style="border: 1px solid var(--uv-color-border); border-radius: 0.5rem"
            >
          </div>

          <div v-if="['button', 'alert', 'badge'].includes(component)" class="control-row">
            <label for="variant">Variant or tone</label>
            <select id="variant" v-model="variant">
              <option>primary</option>
              <option>outline</option>
              <option>ghost</option>
              <option>danger</option>
            </select>
          </div>

          <UvSwitch
            v-if="component === 'button'"
            v-model="disabled"
            label="Disabled"
          />
        </aside>
      </div>
    </div>
  </div>
</template>
