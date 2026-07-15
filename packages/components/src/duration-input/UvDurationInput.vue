<script setup lang="ts">
import { computed } from 'vue'
import { normalizeGeneratedItems, normalizeGeneratedValues } from '../_generated/generated'
import type { UvGeneratedItem, UvGeneratedModelValue, UvGeneratedOrientation, UvGeneratedTone } from '../_generated/generated'
import type { UvDurationInputChangeDetail } from './duration-input.types'

interface Props {
  modelValue?: UvGeneratedModelValue
  label?: string
  title?: string
  description?: string
  value?: string | number
  items?: UvGeneratedItem[]
  itemsJson?: string
  values?: number[]
  valuesJson?: string
  disabled?: boolean
  loading?: boolean
  tone?: UvGeneratedTone
  orientation?: UvGeneratedOrientation
  multiple?: boolean
  href?: string
  src?: string
  alt?: string
  placeholder?: string
  min?: number
  max?: number
  step?: number
  columns?: number
  gap?: string
  locale?: string
  dir?: 'ltr' | 'rtl' | 'auto'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: '',
  title: '',
  description: '',
  value: '',
  items: () => [],
  itemsJson: '',
  values: () => [],
  valuesJson: '',
  disabled: false,
  loading: false,
  tone: 'neutral',
  orientation: 'horizontal',
  multiple: false,
  href: '',
  src: '',
  alt: '',
  placeholder: '',
  min: 0,
  max: 100,
  step: 1,
  columns: 3,
  gap: '1rem',
  locale: 'en',
  dir: 'auto'
})
const emit = defineEmits<{
  'update:modelValue': [value: UvGeneratedModelValue]
  change: [detail: UvDurationInputChangeDetail]
  action: [detail: UvDurationInputChangeDetail]
}>()
const fallbackItems: UvGeneratedItem[] = [
  { id: 'first', label: 'First item', description: 'Portable typed item' },
  { id: 'second', label: 'Second item', description: 'JSON-friendly item' }
]
const resolvedItems = computed(() => normalizeGeneratedItems(props.items, props.itemsJson, fallbackItems))
const resolvedValues = computed(() => normalizeGeneratedValues(props.values, props.valuesJson).length ? normalizeGeneratedValues(props.values, props.valuesJson) : [24, 48, 72, 56])
const accessibleLabel = computed(() => props.label || props.title || 'Duration Input')

const controlId = `uv-duration-input-${Math.random().toString(36).slice(2, 8)}`
const displayValue = computed(() => Array.isArray(props.modelValue) ? props.modelValue.join(', ') : typeof props.modelValue === 'boolean' ? String(props.modelValue) : props.modelValue ?? props.value ?? '')
function update(event: Event): void {
  const input = event.target as HTMLInputElement | HTMLTextAreaElement
  const value: UvGeneratedModelValue = input.type === 'number' && input.value !== '' ? Number(input.value) : input.value
  const detail: UvDurationInputChangeDetail = { value, source: 'input' }
  emit('update:modelValue', value)
  emit('change', detail)
}
</script>

<template>
  <div class="uv-generated uv-duration-input" :class="`uv-generated--${tone}`" data-uv-component="UvDurationInput">
    <div class="uv-generated__surface">
      <label class="uv-generated__label" :for="controlId">{{ label || title || 'Duration Input' }}
        <textarea v-if="false" :id="controlId" class="uv-generated__input" :value="displayValue" :placeholder="placeholder" :disabled="disabled" @input="update" />
        <input v-else :id="controlId" class="uv-generated__input" type="number" :value="displayValue" :placeholder="placeholder" :disabled="disabled" :min="min" :max="max" :step="step" @input="update" @change="update">
      </label>
      <p v-if="description" class="uv-generated__description">{{ description }}</p>
      <slot />
    </div>
  </div>
</template>

<style>.uv-generated{box-sizing:border-box;font:inherit;color:var(--uv-color-text,#0f172a)}.uv-generated__surface{display:grid;gap:.65rem;padding:1rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff)}.uv-generated__title{margin:0;font-size:1rem}.uv-generated__description{margin:0;color:var(--uv-color-muted,#64748b);font-size:.9rem}.uv-generated__list{display:grid;gap:.45rem;margin:0;padding:0;list-style:none}.uv-generated__item{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.55rem .65rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.5rem;background:#fff}.uv-generated button,.uv-generated input,.uv-generated textarea,.uv-generated select{font:inherit}.uv-generated button{cursor:pointer}.uv-generated button:disabled,.uv-generated input:disabled{cursor:not-allowed;opacity:.6}.uv-generated__button{padding:.6rem .85rem;border:1px solid var(--uv-color-primary,#2563eb);border-radius:.55rem;background:var(--uv-color-primary,#2563eb);color:#fff}.uv-generated__button--secondary{background:#fff;color:var(--uv-color-primary,#2563eb)}.uv-generated__input{box-sizing:border-box;width:100%;padding:.65rem .75rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.55rem}.uv-generated__label{display:grid;gap:.4rem;font-weight:600}.uv-generated__value{font-size:1.45rem}.uv-generated__meta{color:var(--uv-color-muted,#64748b);font-size:.8rem}.uv-generated--primary .uv-generated__surface{border-color:#93c5fd}.uv-generated--success .uv-generated__surface{border-color:#86efac}.uv-generated--warning .uv-generated__surface{border-color:#fde68a}.uv-generated--danger .uv-generated__surface{border-color:#fca5a5}.uv-generated--info .uv-generated__surface{border-color:#7dd3fc}@media(prefers-reduced-motion:reduce){.uv-generated *{scroll-behavior:auto!important;animation-duration:.001ms!important;transition-duration:.001ms!important}}.uv-generated textarea{min-height:7rem;resize:vertical}</style>
