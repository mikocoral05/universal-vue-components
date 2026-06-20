<script setup lang="ts">
import { UvAlert, UvButton, UvDivider, UvSkeleton, UvSlider } from '@universal-vue/vue'
const readiness = ref(78)
</script>

<template>
  <main>
    <h1>Nuxt fixture</h1>
    <UvAlert title="SSR-compatible import">Rendered by a Nuxt application.</UvAlert>
    <UvSlider v-model="readiness" label="Readiness" value-suffix="%" show-value />
    <UvDivider label="Loading state" />
    <UvSkeleton :lines="2" />
    <UvButton>Continue</UvButton>
  </main>
</template>

<style>main{display:grid;gap:1rem;max-width:640px;margin:4rem auto;font-family:system-ui}</style>
