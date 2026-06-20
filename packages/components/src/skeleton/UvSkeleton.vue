<script setup lang="ts">
import { computed } from 'vue'
import type { UvSkeletonVariant } from './skeleton.types'

interface Props {
  variant?: UvSkeletonVariant
  width?: string | number
  height?: string | number
  lines?: number
  animated?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text',
  width: '100%',
  lines: 1,
  animated: true,
  label: 'Loading content'
})

function cssSize(value: string | number | undefined): string | undefined {
  if (value === undefined || value === '') return undefined
  return typeof value === 'number' ? `${value}px` : value
}

const safeLines = computed(() => Math.max(1, Math.floor(props.lines)))
const rootStyle = computed(() => ({ width: cssSize(props.width) }))
const itemStyle = computed(() => {
  const fallbackHeight = props.variant === 'text' ? '1em' : props.variant === 'circular' ? cssSize(props.width) : '5rem'
  return { width: props.variant === 'circular' ? cssSize(props.width) : undefined, height: cssSize(props.height) ?? fallbackHeight }
})
</script>

<template>
  <div
    class="uv-skeleton"
    :class="[`uv-skeleton--${variant}`, { 'uv-skeleton--animated': animated }]"
    :style="rootStyle"
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <span
      v-for="line in safeLines"
      :key="line"
      class="uv-skeleton__item"
      :class="{ 'uv-skeleton__item--last': variant === 'text' && safeLines > 1 && line === safeLines }"
      :style="itemStyle"
      aria-hidden="true"
    />
    <span class="uv-sr-only">{{ label }}</span>
  </div>
</template>

<style>
.uv-skeleton{display:grid;gap:.55rem;font-family:var(--uv-font-sans,system-ui,sans-serif)}
.uv-skeleton__item{display:block;max-width:100%;overflow:hidden;border-radius:var(--uv-radius-sm,.375rem);background:var(--uv-color-surface-muted,#e2e8f0)}
.uv-skeleton--text .uv-skeleton__item{border-radius:.25rem}
.uv-skeleton--circular .uv-skeleton__item{aspect-ratio:1;border-radius:999px}
.uv-skeleton__item--last{width:72%!important}
.uv-skeleton--animated .uv-skeleton__item{position:relative}
.uv-skeleton--animated .uv-skeleton__item::after{content:'';position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgb(255 255 255/.55),transparent);animation:uv-skeleton-shimmer 1.45s infinite}
.uv-sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
@keyframes uv-skeleton-shimmer{100%{transform:translateX(100%)}}
@media (prefers-reduced-motion:reduce){.uv-skeleton--animated .uv-skeleton__item::after{animation:none}}
</style>
