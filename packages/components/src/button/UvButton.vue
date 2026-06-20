<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import UvSpinner from '../spinner/UvSpinner.vue'
import type { UvButtonSize, UvButtonVariant } from './button.types'
interface Props { variant?: UvButtonVariant; size?: UvButtonSize; loading?: boolean; disabled?: boolean; type?: ButtonHTMLAttributes['type']; block?: boolean }
const props = withDefaults(defineProps<Props>(), { variant:'primary', size:'md', loading:false, disabled:false, type:'button', block:false })
const emit = defineEmits<{ click:[event:MouseEvent] }>()
function handleClick(event:MouseEvent){ if(props.disabled||props.loading){event.preventDefault();event.stopImmediatePropagation();return};emit('click',event) }
</script>
<template>
  <button class="uv-button" :class="[`uv-button--${variant}`,`uv-button--${size}`,{'uv-button--block':block}]" :type="type" :disabled="disabled||loading" :aria-busy="loading||undefined" @click="handleClick">
    <UvSpinner v-if="loading" class="uv-button__spinner" :size="size==='sm'?14:size==='lg'?20:16" label="Loading" />
    <span v-else-if="$slots.leading" class="uv-button__icon"><slot name="leading" /></span>
    <span class="uv-button__label"><slot /></span>
    <span v-if="$slots.trailing&&!loading" class="uv-button__icon"><slot name="trailing" /></span>
  </button>
</template>
<style>
.uv-button{--_bg:var(--uv-color-primary,#2563eb);--_fg:var(--uv-color-primary-contrast,#fff);--_border:transparent;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border:1px solid var(--_border);border-radius:var(--uv-radius-md,.625rem);background:var(--_bg);color:var(--_fg);font-family:var(--uv-font-sans,system-ui,sans-serif);font-weight:700;line-height:1;white-space:nowrap;transition:filter var(--uv-duration-fast,120ms),transform var(--uv-duration-fast,120ms),box-shadow var(--uv-duration-fast,120ms)}
.uv-button:hover:not(:disabled){filter:brightness(.94)}.uv-button:active:not(:disabled){transform:translateY(1px)}.uv-button:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-button:disabled{opacity:.58;cursor:not-allowed}
.uv-button--secondary{--_bg:var(--uv-color-secondary,#7c3aed)}.uv-button--danger{--_bg:var(--uv-color-danger,#dc2626)}.uv-button--outline{--_bg:transparent;--_fg:var(--uv-color-text,#0f172a);--_border:var(--uv-color-border-strong,#94a3b8)}.uv-button--ghost{--_bg:transparent;--_fg:var(--uv-color-primary,#2563eb)}
.uv-button--sm{min-height:2rem;padding:.45rem .7rem;font-size:.8125rem}.uv-button--md{min-height:2.625rem;padding:.65rem 1rem;font-size:.9375rem}.uv-button--lg{min-height:3.125rem;padding:.8rem 1.25rem;font-size:1rem}.uv-button--block{width:100%}.uv-button__icon,.uv-button__spinner{display:inline-flex}.uv-button__label{display:inline-flex;align-items:center}
</style>
