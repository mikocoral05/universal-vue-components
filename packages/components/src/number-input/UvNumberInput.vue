<script setup lang="ts">
import { computed, ref, useId, watch } from 'vue'
import type { UvNumberInputDetail } from './number-input.types'

interface Props {
  modelValue?: number | null
  id?: string
  name?: string
  label?: string
  hint?: string
  error?: string
  placeholder?: string
  min?: number
  max?: number
  step?: number
  precision?: number
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  allowWheel?: boolean
  incrementLabel?: string
  decrementLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  id: '',
  name: '',
  label: '',
  hint: '',
  error: '',
  placeholder: '',
  step: 1,
  precision: -1,
  disabled: false,
  readonly: false,
  required: false,
  allowWheel: false,
  incrementLabel: 'Increase value',
  decrementLabel: 'Decrease value'
})

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
  input: [detail: UvNumberInputDetail]
  change: [detail: UvNumberInputDetail]
  increment: [detail: UvNumberInputDetail]
  decrement: [detail: UvNumberInputDetail]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const generatedId = useId()
const inputId = computed(() => props.id || `uv-number-input-${generatedId}`)
const hintId = computed(() => `${inputId.value}-hint`)
const errorId = computed(() => `${inputId.value}-error`)
const describedBy = computed(() => props.error ? errorId.value : props.hint ? hintId.value : undefined)
const inputRef = ref<HTMLInputElement>()
const text = ref(props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue))

function inferredPrecision(): number {
  if (props.precision >= 0) return Math.min(12, Math.trunc(props.precision))
  const stepText = String(props.step)
  return stepText.includes('.') ? stepText.length - stepText.indexOf('.') - 1 : 0
}

function normalize(value: number): number {
  let next = value
  if (props.min !== undefined) next = Math.max(props.min, next)
  if (props.max !== undefined) next = Math.min(props.max, next)
  return Number(next.toFixed(inferredPrecision()))
}

function parsedValue(): number | null {
  if (!text.value.trim()) return null
  const value = Number(text.value)
  return Number.isFinite(value) ? value : null
}

function commit(source: 'input' | 'change'): void {
  const raw = parsedValue()
  const value = raw === null ? null : source === 'change' ? normalize(raw) : raw
  if (source === 'change' && value !== null) text.value = String(value)
  emit('update:modelValue', value)
  if (source === 'change') emit('change', { value })
  else emit('input', { value })
}

function stepBy(direction: 1 | -1): void {
  if (props.disabled || props.readonly) return
  const base = parsedValue() ?? props.min ?? 0
  const value = normalize(base + props.step * direction)
  text.value = String(value)
  const detail = { value }
  emit('update:modelValue', value)
  emit('input', detail)
  emit('change', detail)
  if (direction === 1) emit('increment', detail)
  else emit('decrement', detail)
  inputRef.value?.focus()
}

function onInput(event: Event): void {
  text.value = (event.target as HTMLInputElement).value
  commit('input')
}

function onChange(): void {
  commit('change')
}

function onWheel(event: WheelEvent): void {
  if (!props.allowWheel && document.activeElement === inputRef.value) event.preventDefault()
}

const decrementDisabled = computed(() => props.disabled || props.readonly || (props.min !== undefined && parsedValue() !== null && parsedValue()! <= props.min))
const incrementDisabled = computed(() => props.disabled || props.readonly || (props.max !== undefined && parsedValue() !== null && parsedValue()! >= props.max))

watch(() => props.modelValue, (value) => {
  text.value = value === null || value === undefined ? '' : String(value)
})

defineExpose({ focus: () => inputRef.value?.focus(), select: () => inputRef.value?.select() })
</script>

<template>
  <div class="uv-field uv-number-input">
    <label v-if="label" class="uv-field__label" :for="inputId">{{ label }} <span v-if="required" class="uv-field__required" aria-hidden="true">*</span></label>
    <div class="uv-field__control uv-number-input__control" :class="{ 'uv-field__control--invalid': error }">
      <button type="button" class="uv-number-input__step" :aria-label="decrementLabel" :disabled="decrementDisabled" @click="stepBy(-1)">−</button>
      <input
        ref="inputRef"
        :id="inputId"
        class="uv-field__input uv-number-input__input"
        type="number"
        inputmode="decimal"
        :name="name"
        :value="text"
        :placeholder="placeholder"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-invalid="error ? true : undefined"
        :aria-describedby="describedBy"
        @input="onInput"
        @change="onChange"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event); onChange()"
        @wheel="onWheel"
      >
      <button type="button" class="uv-number-input__step" :aria-label="incrementLabel" :disabled="incrementDisabled" @click="stepBy(1)">+</button>
    </div>
    <p v-if="hint && !error" :id="hintId" class="uv-field__hint">{{ hint }}</p>
    <p v-if="error" :id="errorId" class="uv-field__error" role="alert">{{ error }}</p>
  </div>
</template>

<style>
@import '../shared.css';
.uv-number-input__control{overflow:hidden}.uv-number-input__input{min-width:4rem;text-align:center;-moz-appearance:textfield}.uv-number-input__input::-webkit-inner-spin-button,.uv-number-input__input::-webkit-outer-spin-button{margin:0;appearance:none}.uv-number-input__step{align-self:stretch;flex:0 0 2.5rem;border:0;background:var(--uv-color-surface-subtle,#f8fafc);color:var(--uv-color-text,#0f172a);font-size:1.2rem;font-weight:700}.uv-number-input__step:first-child{border-right:1px solid var(--uv-color-border,#dbe3ef)}.uv-number-input__step:last-child{border-left:1px solid var(--uv-color-border,#dbe3ef)}.uv-number-input__step:hover:not(:disabled){background:var(--uv-color-primary,#2563eb);color:var(--uv-color-primary-contrast,#fff)}.uv-number-input__step:focus-visible{position:relative;z-index:1;outline:0;box-shadow:inset var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-number-input__step:disabled{opacity:.4;cursor:not-allowed}
</style>
