<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import UvSpinner from '../spinner/UvSpinner.vue'
import type { UvButtonSize, UvButtonVariant } from '../button/button.types'
interface Props { label:string; variant?:UvButtonVariant; size?:UvButtonSize; loading?:boolean; disabled?:boolean; type?:ButtonHTMLAttributes['type'] }
const props=withDefaults(defineProps<Props>(),{variant:'ghost',size:'md',loading:false,disabled:false,type:'button'})
const emit=defineEmits<{click:[event:MouseEvent]}>()
function handleClick(event:MouseEvent){if(props.disabled||props.loading){event.preventDefault();return};emit('click',event)}
</script>
<template><button class="uv-icon-button" :class="[`uv-icon-button--${variant}`,`uv-icon-button--${size}`]" :aria-label="label" :title="label" :type="type" :disabled="disabled||loading" :aria-busy="loading||undefined" @click="handleClick"><UvSpinner v-if="loading" :size="size==='sm'?14:size==='lg'?20:17" :label="label"/><slot v-else /></button></template>
<style>
.uv-icon-button{--_bg:transparent;--_fg:var(--uv-color-text,#0f172a);--_border:transparent;display:inline-grid;place-items:center;flex:none;border:1px solid var(--_border);border-radius:var(--uv-radius-md,.625rem);background:var(--_bg);color:var(--_fg);transition:background var(--uv-duration-fast,120ms),box-shadow var(--uv-duration-fast,120ms)}.uv-icon-button:hover:not(:disabled){background:color-mix(in srgb,var(--uv-color-primary,#2563eb) 10%,transparent)}.uv-icon-button:focus-visible{outline:0;box-shadow:var(--uv-focus-ring)}.uv-icon-button:disabled{opacity:.55}.uv-icon-button--primary{--_bg:var(--uv-color-primary,#2563eb);--_fg:var(--uv-color-primary-contrast,#fff)}.uv-icon-button--secondary{--_bg:var(--uv-color-secondary,#7c3aed);--_fg:#fff}.uv-icon-button--danger{--_bg:var(--uv-color-danger,#dc2626);--_fg:#fff}.uv-icon-button--outline{--_border:var(--uv-color-border,#dbe3ef)}.uv-icon-button--sm{width:2rem;height:2rem}.uv-icon-button--md{width:2.625rem;height:2.625rem}.uv-icon-button--lg{width:3.125rem;height:3.125rem}
</style>
