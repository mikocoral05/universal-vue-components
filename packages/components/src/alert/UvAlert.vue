<script setup lang="ts">
import { UvIcon, type UvIconName } from '@universal-vue/icons'
import type { UvAlertTone } from './alert.types'
interface Props { tone?:UvAlertTone; title?:string; dismissible?:boolean; dismissLabel?:string }
withDefaults(defineProps<Props>(), {
  tone: 'info',
  dismissible: false,
  dismissLabel: 'Dismiss alert'
})
const emit = defineEmits<{ dismiss: [] }>()
const iconByTone:Record<UvAlertTone,UvIconName>={info:'info',success:'check',warning:'warning',danger:'error'}
</script>
<template><div class="uv-alert" :class="`uv-alert--${tone}`" :role="tone==='danger'?'alert':'status'"><span class="uv-alert__icon"><slot name="icon"><UvIcon :name="iconByTone[tone]" :size="20"/></slot></span><div class="uv-alert__content"><strong v-if="title" class="uv-alert__title">{{ title }}</strong><div class="uv-alert__body"><slot/></div></div><button v-if="dismissible" class="uv-alert__dismiss" type="button" :aria-label="dismissLabel" @click="emit('dismiss')"><UvIcon name="close" :size="18"/></button></div></template>
<style>
.uv-alert{--_tone:var(--uv-color-primary,#2563eb);display:flex;align-items:flex-start;gap:.75rem;padding:1rem;border:1px solid color-mix(in srgb,var(--_tone) 30%,transparent);border-radius:var(--uv-radius-lg,.875rem);background:color-mix(in srgb,var(--_tone) 8%,var(--uv-color-surface,#fff));color:var(--uv-color-text,#0f172a);font-family:var(--uv-font-sans,system-ui,sans-serif)}.uv-alert--success{--_tone:var(--uv-color-success,#15803d)}.uv-alert--warning{--_tone:var(--uv-color-warning,#b45309)}.uv-alert--danger{--_tone:var(--uv-color-danger,#dc2626)}.uv-alert__icon{display:inline-flex;color:var(--_tone);margin-top:.08rem}.uv-alert__content{display:grid;gap:.2rem;flex:1}.uv-alert__title{font-size:.9375rem}.uv-alert__body{font-size:.875rem;line-height:1.55;color:color-mix(in srgb,var(--uv-color-text-muted,#64748b) 85%,var(--uv-color-text,#0f172a))}.uv-alert__dismiss{display:grid;place-items:center;flex:none;width:1.8rem;height:1.8rem;border:0;border-radius:.4rem;background:transparent;color:color-mix(in srgb,var(--uv-color-text-muted,#64748b) 85%,var(--uv-color-text,#0f172a))}.uv-alert__dismiss:hover{background:color-mix(in srgb,var(--_tone) 10%,transparent)}.uv-alert__dismiss:focus-visible{outline:0;box-shadow:var(--uv-focus-ring)}
</style>
