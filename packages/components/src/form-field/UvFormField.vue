<script setup lang="ts">
import { computed, useId } from 'vue'

interface Props {
  label?: string
  hint?: string
  error?: string
  forId?: string
  required?: boolean
  disabled?: boolean
  optionalText?: string
  hideLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '', hint: '', error: '', forId: '', required: false, disabled: false,
  optionalText: 'Optional', hideLabel: false
})

const generatedId = useId()
const controlId = computed(() => props.forId || `uv-form-field-${generatedId}`)
const labelId = computed(() => `${controlId.value}-label`)
const hintId = computed(() => `${controlId.value}-hint`)
const errorId = computed(() => `${controlId.value}-error`)
const describedBy = computed(() => props.error ? errorId.value : props.hint ? hintId.value : undefined)
</script>

<template>
  <div
    class="uv-form-field"
    role="group"
    :aria-labelledby="label ? labelId : undefined"
    :aria-describedby="describedBy"
    :aria-disabled="disabled || undefined"
  >
    <label
      v-if="label"
      :id="labelId"
      class="uv-form-field__label"
      :class="{ 'uv-form-field__label--hidden': hideLabel }"
      :for="controlId"
    >
      <slot name="label">{{ label }}</slot>
      <span v-if="required" class="uv-form-field__required" aria-hidden="true">*</span>
      <span v-else-if="optionalText" class="uv-form-field__optional">{{ optionalText }}</span>
    </label>
    <div class="uv-form-field__control" :class="{ 'uv-form-field__control--invalid': error }">
      <slot
        :control-id="controlId"
        :described-by="describedBy"
        :invalid="Boolean(error)"
        :disabled="disabled"
        :required="required"
      />
    </div>
    <p v-if="error" :id="errorId" class="uv-form-field__message uv-form-field__message--error" role="alert">
      <slot name="error">{{ error }}</slot>
    </p>
    <p v-else-if="hint" :id="hintId" class="uv-form-field__message">
      <slot name="hint">{{ hint }}</slot>
    </p>
  </div>
</template>

<style>
.uv-form-field{display:grid;gap:.4rem;color:var(--uv-color-text,#0f172a);font:inherit}.uv-form-field__label{display:flex;align-items:baseline;gap:.35rem;font-size:.875rem;font-weight:650}.uv-form-field__label--hidden{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.uv-form-field__required{color:var(--uv-color-danger,#dc2626)}.uv-form-field__optional{margin-inline-start:auto;color:var(--uv-color-muted,#64748b);font-size:.75rem;font-weight:500}.uv-form-field__control{min-width:0}.uv-form-field__control--invalid{--uv-color-border:var(--uv-color-danger,#dc2626)}.uv-form-field__message{margin:0;color:var(--uv-color-muted,#64748b);font-size:.8rem;line-height:1.35}.uv-form-field__message--error{color:var(--uv-color-danger,#dc2626)}
</style>
