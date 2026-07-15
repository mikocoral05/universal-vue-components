<script setup lang="ts">
import { computed } from 'vue'
import { normalizeGeneratedItems, normalizeGeneratedValues } from '../_generated/generated'
import type { UvGeneratedId, UvGeneratedItem, UvGeneratedModelValue, UvGeneratedOrientation, UvGeneratedTone } from '../_generated/generated'
import type { UvReleaseChannelChangeDetail } from './release-channel.types'

const COMPONENT_LABEL = 'Release Channel'
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
  dir: 'auto',
  name: '',
  required: false,
  readonly: false
})
const emit = defineEmits<{
  'update:modelValue': [value: UvGeneratedModelValue]
  change: [detail: UvReleaseChannelChangeDetail]
  action: [detail: UvReleaseChannelChangeDetail]
}>()
const fallbackItems: UvGeneratedItem[] = [
  { id: 'first', label: 'First item', description: 'Portable typed item', meta: 'Ready' },
  { id: 'second', label: 'Second item', description: 'JSON-friendly item', meta: 'Available' }
]
const resolvedItems = computed(() => normalizeGeneratedItems(props.items, props.itemsJson, fallbackItems))
const resolvedValues = computed(() => {
  const values = normalizeGeneratedValues(props.values, props.valuesJson)
  return values.length ? values : [24, 48, 72, 56]
})
const accessibleLabel = computed(() => props.label || props.title || COMPONENT_LABEL)
const selectedValues = computed<UvGeneratedId[]>(() => Array.isArray(props.modelValue) ? props.modelValue : typeof props.modelValue === 'string' || typeof props.modelValue === 'number' ? [props.modelValue] : [])
function emitValue(value: UvGeneratedModelValue, source: 'pointer' | 'keyboard' | 'input' | 'programmatic', item?: UvGeneratedItem): void {
  if (props.disabled || props.readonly) return
  const detail = { value, source, item }
  emit('update:modelValue', value)
  emit('change', detail)
  emit('action', detail)
}
function choose(item: UvGeneratedItem, source: 'pointer' | 'keyboard' = 'pointer'): void {
  if (props.disabled || props.readonly || item.disabled) return
  const value = item.value ?? item.id
  if (props.multiple) {
    const current = selectedValues.value
    const next = current.includes(value) ? current.filter((entry) => entry !== value) : [...current, value]
    emitValue(next, source, item)
  } else emitValue(value, source, item)
}
function onInput(event: Event): void {
  const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  emitValue(target.value, 'input')
}
function submit(event: Event): void {
  event.preventDefault()
  emitValue(props.modelValue ?? props.value ?? true, 'keyboard')
}
const chartMax = computed(() => Math.max(1, ...resolvedValues.value.map((entry) => Math.abs(entry))))
const layoutStyle = computed(() => ({ '--uv-next-columns': String(Math.max(1, props.columns)), gap: props.gap }))
</script>

<template>
<section class="uv-next uv-release-channel" :class="`uv-next--${tone}`" data-uv-component="UvReleaseChannel" role="status" :aria-label="accessibleLabel" :aria-busy="loading || undefined" :dir="dir">
  <div class="uv-next__surface"><header><h3 class="uv-next__title">{{ title || label || 'Release Channel' }}</h3><p v-if="description" class="uv-next__description">{{ description }}</p></header><strong v-if="value !== ''" class="uv-next__value">{{ value }}</strong><ul v-if="items.length || itemsJson" class="uv-next__list"><li v-for="item in resolvedItems" :key="item.id" class="uv-next__item"><span>{{ item.label }}</span><small class="uv-next__meta">{{ item.meta || item.description }}</small></li></ul><slot>Release Channel content</slot></div>
</section>
</template>

<style>.uv-next{box-sizing:border-box;font:inherit;color:var(--uv-color-text,#0f172a)}.uv-next__surface{display:grid;gap:.7rem;padding:1rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff)}.uv-next__title{margin:0;font-size:1rem}.uv-next__description{margin:0;color:var(--uv-color-text-muted,#64748b);font-size:.9rem}.uv-next__list{display:grid;gap:.45rem;margin:0;padding:0;list-style:none}.uv-next__item{display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.6rem .7rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.5rem;background:var(--uv-color-surface,#fff)}.uv-next button,.uv-next input,.uv-next select,.uv-next textarea{font:inherit}.uv-next button{cursor:pointer}.uv-next button:disabled,.uv-next input:disabled,.uv-next select:disabled{cursor:not-allowed;opacity:.6}.uv-next__button{padding:.6rem .85rem;border:1px solid var(--uv-color-primary,#2563eb);border-radius:.55rem;background:var(--uv-color-primary,#2563eb);color:var(--uv-color-primary-contrast,#fff)}.uv-next__button--secondary{background:var(--uv-color-surface,#fff);color:var(--uv-color-primary,#2563eb)}.uv-next__input{box-sizing:border-box;width:100%;padding:.65rem .75rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.55rem;background:var(--uv-color-surface,#fff);color:inherit}.uv-next__label{display:grid;gap:.4rem;font-weight:600}.uv-next__meta{color:var(--uv-color-text-muted,#64748b);font-size:.8rem}.uv-next__value{font-size:1.35rem;font-weight:700}.uv-next__actions{display:flex;flex-wrap:wrap;gap:.5rem}.uv-next__grid{display:grid;grid-template-columns:repeat(var(--uv-next-columns,3),minmax(0,1fr));gap:.5rem}.uv-next__chart{display:flex;align-items:end;gap:.35rem;height:8rem;padding:.5rem;border-radius:.5rem;background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-next__bar{flex:1;min-width:.5rem;border-radius:.25rem .25rem 0 0;background:var(--uv-color-primary,#2563eb)}.uv-next__code{overflow:auto;margin:0;padding:.8rem;border-radius:.5rem;background:#0f172a;color:#e2e8f0;white-space:pre-wrap}.uv-next__sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.uv-next--success .uv-next__surface{border-color:#86efac}.uv-next--warning .uv-next__surface{border-color:#fde68a}.uv-next--danger .uv-next__surface{border-color:#fca5a5}.uv-next--info .uv-next__surface,.uv-next--primary .uv-next__surface{border-color:#93c5fd}@media(prefers-reduced-motion:reduce){.uv-next *{scroll-behavior:auto!important;animation-duration:.001ms!important;transition-duration:.001ms!important}}</style>
