<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Vue consumer')
const enabled = ref(true)
const coverage = ref(70)
const menuOpen = ref(false)
</script>

<template>
  <main>
    <h1>Native Vue fixture</h1>
    <UvInput v-model="name" label="Project name" clearable />
    <UvSwitch v-model="enabled" label="Enabled" />
    <UvSlider v-model="coverage" label="Coverage" value-suffix="%" show-value />
    <UvDivider label="Actions" />
    <div class="actions">
      <UvButton>Save</UvButton>
      <UvDropdownMenu v-model="menuOpen" label="More actions">
        <button type="button" role="menuitem">Preview</button>
        <button type="button" role="menuitem">Duplicate</button>
      </UvDropdownMenu>
    </div>
  </main>
</template>

<style>
body{font-family:system-ui;margin:0;background:#f8fafc}main{display:grid;gap:1rem;max-width:560px;margin:4rem auto;padding:2rem;background:white;border-radius:1rem}.actions{display:flex;gap:.75rem;align-items:center}
</style>
