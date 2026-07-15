<script setup lang="ts">
import { computed, useId } from 'vue'
import { normalizeGeneratedItems, normalizeGeneratedValues } from '../_generated/generated'
import type { UvGeneratedId, UvGeneratedItem, UvGeneratedModelValue, UvGeneratedOrientation, UvGeneratedTone } from '../_generated/generated'
import type { UvRetailCustomerBreakdownChangeDetail } from './retail-customer-breakdown.types'

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
  name?: string
  required?: boolean
  readonly?: boolean
  open?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null, label: '', title: '', description: '', value: '', items: () => [], itemsJson: '',
  values: () => [], valuesJson: '', disabled: false, loading: false, tone: 'neutral', orientation: 'horizontal',
  multiple: false, href: '', src: '', alt: '', placeholder: '', min: 0, max: 100, step: 1, columns: 3,
  gap: '.75rem', locale: 'en', dir: 'auto', name: '', required: false, readonly: false, open: false
})
const emit = defineEmits<{
  'update:modelValue': [value: UvGeneratedModelValue]
  change: [detail: UvRetailCustomerBreakdownChangeDetail]
  action: [detail: UvRetailCustomerBreakdownChangeDetail]
}>()
const fallbackItems: UvGeneratedItem[] = [
  { id: 'first', label: 'First item', description: 'Portable typed item', meta: 'Ready' },
  { id: 'second', label: 'Second item', description: 'JSON-friendly item', meta: 'Available' }
]
const resolvedItems = computed(() => normalizeGeneratedItems(props.items, props.itemsJson, fallbackItems))
const resolvedValues = computed(() => { const values = normalizeGeneratedValues(props.values, props.valuesJson); return values.length ? values : [24,48,72,56] })
const accessibleLabel = computed(() => props.label || props.title || 'Retail Customer Breakdown')
const selectedValues = computed<UvGeneratedId[]>(() => Array.isArray(props.modelValue) ? props.modelValue : typeof props.modelValue === 'string' || typeof props.modelValue === 'number' ? [props.modelValue] : [])
const displayValue = computed(() => Array.isArray(props.modelValue) ? props.modelValue.join(', ') : typeof props.modelValue === 'boolean' ? String(props.modelValue) : props.modelValue ?? props.value ?? '')
const controlId = `uv-retail-customer-breakdown-${useId()}`
const chartMax = computed(() => Math.max(1, ...resolvedValues.value.map((entry) => Math.abs(entry))))
const layoutStyle = computed(() => ({ '--uv-future-columns': String(Math.max(1, props.columns)), '--uv-future-gap': props.gap }))
function emitValue(value: UvGeneratedModelValue, source: 'pointer' | 'keyboard' | 'input' | 'programmatic', item?: UvGeneratedItem): void {
  if (props.disabled || props.readonly) return
  const detail: UvRetailCustomerBreakdownChangeDetail = { value, source, item }
  emit('update:modelValue', value); emit('change', detail); emit('action', detail)
}
function choose(item: UvGeneratedItem, source: 'pointer' | 'keyboard' = 'pointer'): void {
  if (props.disabled || props.readonly || item.disabled) return
  const value = item.value ?? item.id
  if (props.multiple) { const current = selectedValues.value; emitValue(current.includes(value) ? current.filter((entry) => entry !== value) : [...current, value], source, item) }
  else emitValue(value, source, item)
}
function onInput(event: Event): void {
  const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  const next: UvGeneratedModelValue = target instanceof HTMLInputElement && target.type === 'number' && target.value !== '' ? Number(target.value) : target.value
  emitValue(next, 'input')
}
function submit(event: Event): void { event.preventDefault(); emitValue(displayValue.value || true, 'keyboard') }
function isSelected(item: UvGeneratedItem): boolean { return selectedValues.value.includes(item.value ?? item.id) }
</script>

<template>
<section class="uv-future uv-retail-customer-breakdown" :class="`uv-future--${tone}`" data-uv-component="UvRetailCustomerBreakdown" :dir="dir" role="region" :aria-label="accessibleLabel" :aria-busy="loading || undefined"><div class="uv-future__surface"><header class="uv-future__header"><h3 class="uv-future__title">{{ title || label || 'Retail Customer Breakdown' }}</h3><p v-if="description" class="uv-future__description">{{ description }}</p></header><strong v-if="value !== '' || modelValue != null" class="uv-future__value">{{ displayValue }}</strong><div class="uv-future__grid" :style="layoutStyle"><article v-for="item in resolvedItems" :key="item.id" class="uv-future__item"><strong>{{ item.label }}</strong><span v-if="item.description" class="uv-future__description">{{ item.description }}</span><small v-if="item.meta" class="uv-future__meta">{{ item.meta }}</small></article></div><slot /></div></section>
</template>

<style scoped>
.uv-future{box-sizing:border-box;font:inherit;color:var(--uv-color-text,#0f172a)}.uv-future *{box-sizing:border-box}.uv-future__surface{display:grid;gap:.75rem;padding:1rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff)}.uv-future__header{display:grid;gap:.25rem}.uv-future__title{margin:0;font-size:1rem}.uv-future__description{margin:0;color:var(--uv-color-text-muted,#64748b);font-size:.9rem}.uv-future__label{display:grid;gap:.4rem;font-weight:600}.uv-future__input,.uv-future__select,.uv-future__textarea{width:100%;padding:.65rem .75rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.55rem;background:var(--uv-color-surface,#fff);color:inherit;font:inherit}.uv-future__textarea{min-height:7rem;resize:vertical}.uv-future__button{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;padding:.6rem .85rem;border:1px solid var(--uv-color-primary,#2563eb);border-radius:.55rem;background:var(--uv-color-primary,#2563eb);color:var(--uv-color-primary-contrast,#fff);font:inherit;cursor:pointer}.uv-future__button--secondary{background:var(--uv-color-surface,#fff);color:var(--uv-color-primary,#2563eb)}.uv-future__button:disabled,.uv-future input:disabled,.uv-future select:disabled{cursor:not-allowed;opacity:.6}.uv-future__list{display:grid;gap:.5rem;margin:0;padding:0;list-style:none}.uv-future__item{display:grid;gap:.2rem;padding:.65rem .75rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.5rem;background:var(--uv-color-surface,#fff)}button.uv-future__item{width:100%;text-align:left;font:inherit;cursor:pointer}.uv-future__meta{color:var(--uv-color-text-muted,#64748b);font-size:.8rem}.uv-future__value{font-size:1.4rem;font-weight:700}.uv-future__grid{display:grid;grid-template-columns:repeat(var(--uv-future-columns,3),minmax(0,1fr));gap:var(--uv-future-gap,.75rem)}.uv-future__table-wrap{overflow:auto}.uv-future__table{width:100%;border-collapse:collapse}.uv-future__table th,.uv-future__table td{padding:.65rem;border-bottom:1px solid var(--uv-color-border,#cbd5e1);text-align:left}.uv-future__chart{width:100%;min-height:10rem;padding:.5rem;border-radius:.5rem;background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-future__media{display:grid;place-items:center;min-height:9rem;overflow:hidden;border-radius:.5rem;background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-future__media img{max-width:100%;height:auto}.uv-future__nav-list{display:flex;flex-wrap:wrap;gap:.5rem;margin:0;padding:0;list-style:none}.uv-future__nav-link{display:inline-flex;padding:.55rem .7rem;border-radius:.5rem;color:var(--uv-color-primary,#2563eb);text-decoration:none}.uv-future__nav-link[aria-current=true]{background:color-mix(in srgb,var(--uv-color-primary,#2563eb) 12%,transparent);font-weight:700}.uv-future__actions{display:flex;flex-wrap:wrap;gap:.5rem}.uv-future__sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.uv-future--success .uv-future__surface{border-color:#86efac}.uv-future--warning .uv-future__surface{border-color:#fde68a}.uv-future--danger .uv-future__surface{border-color:#fca5a5}.uv-future--info .uv-future__surface,.uv-future--primary .uv-future__surface{border-color:#93c5fd}@media(max-width:640px){.uv-future__grid{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){.uv-future *{scroll-behavior:auto!important;animation-duration:.001ms!important;transition-duration:.001ms!important}}
</style>
