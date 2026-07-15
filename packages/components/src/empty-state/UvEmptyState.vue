<script setup lang="ts">
import type { UvEmptyStateTone } from './empty-state.types'
interface Props { title: string; description?: string; tone?: UvEmptyStateTone; compact?: boolean }
withDefaults(defineProps<Props>(), { description: '', tone: 'neutral', compact: false })
</script>
<template>
  <section class="uv-empty-state" :class="[`uv-empty-state--${tone}`, { 'uv-empty-state--compact': compact }]" role="status" :aria-label="title">
    <div class="uv-empty-state__icon" aria-hidden="true"><slot name="icon">◇</slot></div>
    <h2 class="uv-empty-state__title">{{ title }}</h2>
    <p v-if="description" class="uv-empty-state__description">{{ description }}</p>
    <div v-if="$slots.default" class="uv-empty-state__actions"><slot /></div>
  </section>
</template>
<style>
.uv-empty-state{display:grid;justify-items:center;gap:.7rem;padding:2rem;text-align:center;border:1px dashed var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface-subtle,#f8fafc);color:var(--uv-color-text,#0f172a);font:inherit}.uv-empty-state--compact{padding:1rem}.uv-empty-state__icon{display:grid;place-items:center;width:3rem;height:3rem;border-radius:999px;background:#e2e8f0;font-size:1.5rem}.uv-empty-state--info .uv-empty-state__icon{background:#dbeafe;color:#1d4ed8}.uv-empty-state--success .uv-empty-state__icon{background:#dcfce7;color:#15803d}.uv-empty-state--warning .uv-empty-state__icon{background:#fef3c7;color:#b45309}.uv-empty-state--danger .uv-empty-state__icon{background:#fee2e2;color:#b91c1c}.uv-empty-state__title,.uv-empty-state__description{margin:0}.uv-empty-state__title{font-size:1.05rem}.uv-empty-state__description{max-width:36rem;color:var(--uv-color-text-muted,#64748b)}.uv-empty-state__actions{display:flex;gap:.6rem;flex-wrap:wrap;justify-content:center}
</style>
