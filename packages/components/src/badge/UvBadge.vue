<script setup lang="ts">
import type { UvBadgeTone } from './badge.types'
interface Props { tone?:UvBadgeTone; pill?:boolean; dot?:boolean }
withDefaults(defineProps<Props>(),{tone:'neutral',pill:false,dot:false})
</script>
<template><span class="uv-badge" :class="[`uv-badge--${tone}`,{'uv-badge--pill':pill}]"><span v-if="dot" class="uv-badge__dot" aria-hidden="true"/><slot/></span></template>
<style>
.uv-badge{--_tone:var(--uv-color-text-muted,#64748b);display:inline-flex;align-items:center;gap:.35rem;width:max-content;padding:.28rem .52rem;border-radius:var(--uv-radius-sm,.375rem);background:color-mix(in srgb,var(--_tone) 12%,transparent);color:color-mix(in srgb,var(--_tone) 80%,var(--uv-color-text,#0f172a));font-family:var(--uv-font-sans,system-ui,sans-serif);font-size:.75rem;font-weight:750;line-height:1}.uv-badge--pill{border-radius:999px}.uv-badge--primary{--_tone:var(--uv-color-primary,#2563eb)}.uv-badge--success{--_tone:var(--uv-color-success,#15803d)}.uv-badge--warning{--_tone:var(--uv-color-warning,#b45309)}.uv-badge--danger{--_tone:var(--uv-color-danger,#dc2626)}.uv-badge__dot{width:.42rem;height:.42rem;border-radius:50%;background:currentColor}
</style>
