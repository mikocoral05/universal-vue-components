<script setup lang="ts">
import { computed, nextTick, ref, useId, watch } from 'vue'
import type { UvRatingChangeDetail } from './rating.types'

interface Props {
  modelValue?: number
  id?: string
  name?: string
  label?: string
  max?: number
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  allowClear?: boolean
  showValue?: boolean
  valueLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  id: '',
  name: '',
  label: 'Rating',
  max: 5,
  disabled: false,
  readonly: false,
  required: false,
  allowClear: true,
  showValue: false,
  valueLabel: 'out of'
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [detail: UvRatingChangeDetail]
  hover: [value: number]
}>()

const generatedId = useId()
const ratingId = computed(() => props.id || `uv-rating-${generatedId}`)
const normalizedMax = computed(() => Math.max(1, Math.min(10, Math.trunc(props.max))))
const value = ref(Math.max(0, Math.min(normalizedMax.value, Math.trunc(props.modelValue))))
const preview = ref(0)
const displayedValue = computed(() => preview.value || value.value)
const root = ref<HTMLElement>()

function setValue(next: number): void {
  if (props.disabled || props.readonly) return
  const previousValue = value.value
  const normalized = Math.max(0, Math.min(normalizedMax.value, Math.trunc(next)))
  value.value = props.allowClear && normalized === previousValue ? 0 : normalized
  emit('update:modelValue', value.value)
  emit('change', { value: value.value, previousValue })
}

function focusValue(next: number): void {
  nextTick(() => root.value?.querySelector<HTMLButtonElement>(`[data-rating="${next}"]`)?.focus())
}

function onKeydown(event: KeyboardEvent): void {
  if (props.disabled || props.readonly) return
  let next = value.value || 1
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next = Math.min(normalizedMax.value, next + 1)
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next = Math.max(1, next - 1)
  else if (event.key === 'Home') next = 1
  else if (event.key === 'End') next = normalizedMax.value
  else return
  event.preventDefault()
  const previousValue = value.value
  value.value = next
  emit('update:modelValue', next)
  emit('change', { value: next, previousValue })
  focusValue(next)
}

function setPreview(next: number): void {
  if (props.disabled || props.readonly) return
  preview.value = next
  emit('hover', next)
}

watch(() => props.modelValue, (next) => {
  value.value = Math.max(0, Math.min(normalizedMax.value, Math.trunc(next)))
})
</script>

<template>
  <div class="uv-rating-field">
    <span v-if="label" :id="`${ratingId}-label`" class="uv-rating__label">{{ label }} <span v-if="required" class="uv-rating__required" aria-hidden="true">*</span></span>
    <div
      ref="root"
      class="uv-rating"
      role="radiogroup"
      :aria-labelledby="label ? `${ratingId}-label` : undefined"
      :aria-label="label || 'Rating'"
      :aria-required="required || undefined"
      :aria-readonly="readonly || undefined"
      @keydown="onKeydown"
      @mouseleave="preview = 0; emit('hover', 0)"
    >
      <button
        v-for="star in normalizedMax"
        :key="star"
        type="button"
        class="uv-rating__star"
        :class="{ 'uv-rating__star--active': star <= displayedValue }"
        role="radio"
        :data-rating="star"
        :aria-checked="star === value"
        :aria-label="`${star} ${valueLabel} ${normalizedMax}`"
        :tabindex="star === (value || 1) ? 0 : -1"
        :disabled="disabled"
        :aria-disabled="readonly || undefined"
        @mouseenter="setPreview(star)"
        @focus="setPreview(star)"
        @blur="preview = 0"
        @click="setValue(star)"
      ><span aria-hidden="true">★</span></button>
      <input v-if="name" type="hidden" :name="name" :value="value">
      <output v-if="showValue" class="uv-rating__value">{{ value }}/{{ normalizedMax }}</output>
    </div>
  </div>
</template>

<style>
.uv-rating-field{display:grid;gap:.45rem;font-family:var(--uv-font-sans,system-ui,sans-serif);color:var(--uv-color-text,#0f172a)}.uv-rating__label{font-size:.875rem;font-weight:650}.uv-rating__required{color:var(--uv-color-danger,#dc2626)}.uv-rating{display:flex;align-items:center;gap:.1rem;width:max-content}.uv-rating__star{display:grid;place-items:center;width:2.1rem;height:2.1rem;padding:0;border:0;border-radius:.45rem;background:transparent;color:var(--uv-color-border-strong,#94a3b8);font-size:1.55rem;line-height:1;cursor:pointer}.uv-rating__star--active{color:var(--uv-color-warning,#d97706)}.uv-rating__star:hover:not(:disabled){transform:scale(1.08)}.uv-rating__star:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-rating__star:disabled{cursor:default}.uv-rating[aria-readonly="true"] .uv-rating__star{opacity:1}.uv-rating__value{margin-left:.45rem;color:var(--uv-color-text-muted,#64748b);font-size:.8rem;font-weight:700}
</style>
