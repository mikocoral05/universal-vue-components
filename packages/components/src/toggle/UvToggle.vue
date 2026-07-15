<script setup lang="ts">
import type { UvToggleDetail, UvToggleVariant } from './toggle.types'
interface Props { modelValue?: boolean; label?: string; disabled?: boolean; variant?: UvToggleVariant; size?: 'sm'|'md'|'lg'; name?: string; value?: string }
const props=withDefaults(defineProps<Props>(),{modelValue:false,label:'Toggle',disabled:false,variant:'default',size:'md',name:'',value:'on'})
const emit=defineEmits<{ 'update:modelValue':[value:boolean]; change:[detail:UvToggleDetail] }>()
function activate(){if(props.disabled)return;const pressed=!props.modelValue;emit('update:modelValue',pressed);emit('change',{pressed})}
</script>
<template><span class="uv-toggle-wrap"><button type="button" class="uv-toggle" :class="[`uv-toggle--${variant}`,`uv-toggle--${size}`]" :disabled="disabled" :aria-pressed="modelValue" @click="activate"><slot>{{ label }}</slot></button><input v-if="name" type="hidden" :name="name" :value="modelValue?value:''"></span></template>
<style>.uv-toggle-wrap{display:inline-flex}.uv-toggle{border:1px solid transparent;border-radius:var(--uv-radius-md,.625rem);padding:.55rem .8rem;background:#f1f5f9;color:#334155;font:600 .9rem/1 system-ui;cursor:pointer}.uv-toggle[aria-pressed=true]{background:var(--uv-color-primary,#2563eb);color:#fff}.uv-toggle--outline{background:#fff;border-color:var(--uv-color-border,#cbd5e1)}.uv-toggle--sm{padding:.4rem .6rem;font-size:.8rem}.uv-toggle--lg{padding:.7rem 1rem;font-size:1rem}.uv-toggle:focus-visible{outline:2px solid color-mix(in srgb,var(--uv-color-primary,#2563eb) 40%,transparent);outline-offset:2px}.uv-toggle:disabled{opacity:.55;cursor:not-allowed}</style>
