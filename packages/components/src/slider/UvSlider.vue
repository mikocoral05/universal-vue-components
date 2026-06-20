<script setup lang="ts">
import { computed, useId } from 'vue'
import type { UvSliderSize } from './slider.types'

interface Props {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  id?: string
  name?: string
  label?: string
  hint?: string
  valueSuffix?: string
  showValue?: boolean
  disabled?: boolean
  size?: UvSliderSize
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  label: '',
  hint: '',
  valueSuffix: '',
  showValue: false,
  disabled: false,
  size: 'md'
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  input: [value: number, event: Event]
  change: [value: number, event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const generatedId = useId()
const sliderId = computed(() => props.id ?? `uv-slider-${generatedId}`)
const normalizedValue = computed(() => Math.min(props.max, Math.max(props.min, Number(props.modelValue))))
const percentage = computed(() => props.max === props.min ? 0 : ((normalizedValue.value - props.min) / (props.max - props.min)) * 100)
const displayValue = computed(() => `${normalizedValue.value}${props.valueSuffix}`)
const describedBy = computed(() => props.hint ? `${sliderId.value}-hint` : undefined)

function valueFrom(event: Event): number {
  return Number((event.target as HTMLInputElement).value)
}
function onInput(event: Event) {
  const value = valueFrom(event)
  emit('update:modelValue', value)
  emit('input', value, event)
}
function onChange(event: Event) {
  emit('change', valueFrom(event), event)
}
</script>

<template>
  <div class="uv-slider" :class="`uv-slider--${size}`">
    <div v-if="label || showValue" class="uv-slider__header">
      <label v-if="label" class="uv-slider__label" :for="sliderId">{{ label }}</label>
      <output v-if="showValue" class="uv-slider__value" :for="sliderId">{{ displayValue }}</output>
    </div>
    <input
      :id="sliderId"
      class="uv-slider__input"
      type="range"
      :name="name"
      :value="normalizedValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :aria-describedby="describedBy"
      :aria-valuetext="valueSuffix ? displayValue : undefined"
      :style="{ '--uv-slider-progress': `${percentage}%` }"
      @input="onInput"
      @change="onChange"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    >
    <p v-if="hint" :id="`${sliderId}-hint`" class="uv-slider__hint">{{ hint }}</p>
  </div>
</template>

<style>
.uv-slider{display:grid;gap:.55rem;width:100%;font-family:var(--uv-font-sans,system-ui,sans-serif);color:var(--uv-color-text,#0f172a)}
.uv-slider__header{display:flex;align-items:center;justify-content:space-between;gap:1rem}
.uv-slider__label{font-size:.875rem;font-weight:700}
.uv-slider__value{min-width:2.5rem;padding:.15rem .45rem;border-radius:var(--uv-radius-sm,.375rem);background:var(--uv-color-surface-muted,#f1f5f9);color:var(--uv-color-text-muted,#475569);font-size:.75rem;font-weight:700;text-align:center}
.uv-slider__input{width:100%;height:1.25rem;margin:0;appearance:none;background:transparent;cursor:pointer}
.uv-slider__input::-webkit-slider-runnable-track{height:var(--_track,.35rem);border-radius:999px;background:linear-gradient(to right,var(--uv-color-primary,#2563eb) 0 var(--uv-slider-progress),var(--uv-color-border,#cbd5e1) var(--uv-slider-progress) 100%)}
.uv-slider__input::-moz-range-track{height:var(--_track,.35rem);border-radius:999px;background:var(--uv-color-border,#cbd5e1)}
.uv-slider__input::-moz-range-progress{height:var(--_track,.35rem);border-radius:999px;background:var(--uv-color-primary,#2563eb)}
.uv-slider__input::-webkit-slider-thumb{width:var(--_thumb,1.15rem);height:var(--_thumb,1.15rem);margin-top:calc((var(--_track,.35rem) - var(--_thumb,1.15rem))/2);appearance:none;border:3px solid var(--uv-color-surface,#fff);border-radius:999px;background:var(--uv-color-primary,#2563eb);box-shadow:0 0 0 1px var(--uv-color-primary,#2563eb),var(--uv-shadow-sm,0 1px 2px rgb(15 23 42/.15))}
.uv-slider__input::-moz-range-thumb{width:var(--_thumb,1.15rem);height:var(--_thumb,1.15rem);border:3px solid var(--uv-color-surface,#fff);border-radius:999px;background:var(--uv-color-primary,#2563eb);box-shadow:0 0 0 1px var(--uv-color-primary,#2563eb)}
.uv-slider__input:focus-visible{outline:0}
.uv-slider__input:focus-visible::-webkit-slider-thumb{box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}
.uv-slider__input:focus-visible::-moz-range-thumb{box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}
.uv-slider__input:disabled{cursor:not-allowed;opacity:.55}
.uv-slider__hint{margin:0;color:var(--uv-color-text-muted,#64748b);font-size:.78rem;line-height:1.45}
.uv-slider--sm{--_track:.25rem;--_thumb:.9rem}.uv-slider--lg{--_track:.5rem;--_thumb:1.35rem}
</style>
