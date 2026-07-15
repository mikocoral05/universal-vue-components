<script setup lang="ts">
import { computed, useId } from 'vue'
import type { UvFieldsetLayout } from './fieldset.types'

interface Props {
  legend?: string
  description?: string
  error?: string
  disabled?: boolean
  required?: boolean
  layout?: UvFieldsetLayout
  columns?: number
}

const props = withDefaults(defineProps<Props>(), {
  legend: '', description: '', error: '', disabled: false, required: false, layout: 'stack', columns: 2
})
const generatedId = useId()
const descriptionId = computed(() => `uv-fieldset-${generatedId}-description`)
const errorId = computed(() => `uv-fieldset-${generatedId}-error`)
const describedBy = computed(() => props.error ? errorId.value : props.description ? descriptionId.value : undefined)
const safeColumns = computed(() => Math.max(1, Math.min(6, Math.floor(props.columns))))
</script>

<template>
  <fieldset
    class="uv-fieldset"
    :class="`uv-fieldset--${layout}`"
    :disabled="disabled"
    :aria-describedby="describedBy"
    :aria-invalid="error ? 'true' : undefined"
    :style="{ '--uv-fieldset-columns': safeColumns }"
  >
    <legend v-if="legend" class="uv-fieldset__legend">
      <slot name="legend">{{ legend }}</slot>
      <span v-if="required" class="uv-fieldset__required" aria-hidden="true">*</span>
    </legend>
    <p v-if="description && !error" :id="descriptionId" class="uv-fieldset__message">
      <slot name="description">{{ description }}</slot>
    </p>
    <div class="uv-fieldset__content"><slot /></div>
    <p v-if="error" :id="errorId" class="uv-fieldset__message uv-fieldset__message--error" role="alert">
      <slot name="error">{{ error }}</slot>
    </p>
  </fieldset>
</template>

<style>
.uv-fieldset{display:grid;gap:.75rem;min-width:0;margin:0;padding:1rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);color:var(--uv-color-text,#0f172a);font:inherit}.uv-fieldset:disabled{opacity:.65}.uv-fieldset__legend{padding:0 .35rem;font-weight:700}.uv-fieldset__required{color:var(--uv-color-danger,#dc2626)}.uv-fieldset__message{margin:0;color:var(--uv-color-muted,#64748b);font-size:.82rem}.uv-fieldset__message--error{color:var(--uv-color-danger,#dc2626)}.uv-fieldset__content{display:grid;gap:.75rem}.uv-fieldset--grid .uv-fieldset__content{grid-template-columns:repeat(var(--uv-fieldset-columns),minmax(0,1fr))}.uv-fieldset--inline .uv-fieldset__content{display:flex;flex-wrap:wrap;align-items:center}@media(max-width:640px){.uv-fieldset--grid .uv-fieldset__content{grid-template-columns:1fr}}
</style>
