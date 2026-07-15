<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import type { UvComboboxChangeDetail, UvComboboxOption, UvComboboxValue } from './combobox.types'

interface Props {
  modelValue?: UvComboboxValue | null
  options?: UvComboboxOption[]
  optionsJson?: string
  id?: string
  name?: string
  label?: string
  hint?: string
  error?: string
  placeholder?: string
  emptyText?: string
  clearLabel?: string
  disabled?: boolean
  required?: boolean
  clearable?: boolean
  filterable?: boolean
  openOnFocus?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  options: () => [],
  optionsJson: '',
  id: '',
  name: '',
  label: '',
  hint: '',
  error: '',
  placeholder: 'Select an option',
  emptyText: 'No options found',
  clearLabel: 'Clear selection',
  disabled: false,
  required: false,
  clearable: true,
  filterable: true,
  openOnFocus: true
})

const emit = defineEmits<{
  'update:modelValue': [value: UvComboboxValue | null]
  change: [detail: UvComboboxChangeDetail]
  search: [query: string]
  open: []
  close: []
  clear: []
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

function isOption(value: unknown): value is UvComboboxOption {
  if (!value || typeof value !== 'object') return false
  const option = value as Partial<UvComboboxOption>
  return typeof option.label === 'string' && (typeof option.value === 'string' || typeof option.value === 'number')
}

const normalizedOptions = computed<UvComboboxOption[]>(() => {
  if (props.options.length) return props.options.filter(isOption)
  if (!props.optionsJson) return []
  try {
    const parsed: unknown = JSON.parse(props.optionsJson)
    return Array.isArray(parsed) ? parsed.filter(isOption) : []
  } catch {
    return []
  }
})

const generatedId = useId()
const inputId = computed(() => props.id || `uv-combobox-${generatedId}`)
const listboxId = computed(() => `${inputId.value}-listbox`)
const hintId = computed(() => `${inputId.value}-hint`)
const errorId = computed(() => `${inputId.value}-error`)
const describedBy = computed(() => props.error ? errorId.value : props.hint ? hintId.value : undefined)
const root = ref<HTMLElement>()
const input = ref<HTMLInputElement>()
const isOpen = ref(false)
const activeIndex = ref(-1)
const query = ref('')

const selectedOption = computed(() => normalizedOptions.value.find((option) => option.value === props.modelValue) ?? null)
const filteredOptions = computed(() => {
  if (!props.filterable || !query.value.trim()) return normalizedOptions.value
  const needle = query.value.trim().toLocaleLowerCase()
  return normalizedOptions.value.filter((option) => `${option.label} ${option.description ?? ''}`.toLocaleLowerCase().includes(needle))
})
const activeOption = computed(() => filteredOptions.value[activeIndex.value] ?? null)
const activeDescendant = computed(() => activeOption.value ? `${listboxId.value}-option-${activeIndex.value}` : undefined)

function syncQuery(): void {
  query.value = selectedOption.value?.label ?? ''
}

function firstEnabledIndex(): number {
  return filteredOptions.value.findIndex((option) => !option.disabled)
}

function lastEnabledIndex(): number {
  for (let index = filteredOptions.value.length - 1; index >= 0; index -= 1) {
    if (!filteredOptions.value[index]?.disabled) return index
  }
  return -1
}

function setOpen(value: boolean): void {
  if ((props.disabled && value) || value === isOpen.value) return
  isOpen.value = value
  if (value) {
    activeIndex.value = firstEnabledIndex()
    emit('open')
  } else {
    activeIndex.value = -1
    emit('close')
  }
}

function moveActive(step: 1 | -1): void {
  if (!filteredOptions.value.length) return
  let index = activeIndex.value
  for (let count = 0; count < filteredOptions.value.length; count += 1) {
    index = (index + step + filteredOptions.value.length) % filteredOptions.value.length
    if (!filteredOptions.value[index]?.disabled) {
      activeIndex.value = index
      nextTick(() => root.value?.querySelector<HTMLElement>(`[id="${listboxId.value}-option-${index}"]`)?.scrollIntoView({ block: 'nearest' }))
      return
    }
  }
}

function selectOption(option: UvComboboxOption): void {
  if (option.disabled) return
  query.value = option.label
  emit('update:modelValue', option.value)
  emit('change', { value: option.value, option })
  setOpen(false)
  nextTick(() => input.value?.focus())
}

function clearSelection(): void {
  query.value = ''
  emit('update:modelValue', null)
  emit('change', { value: null, option: null })
  emit('clear')
  if (!props.disabled) {
    input.value?.focus()
    setOpen(true)
  }
}

function onInput(event: Event): void {
  query.value = (event.target as HTMLInputElement).value
  emit('search', query.value)
  if (!isOpen.value) setOpen(true)
  activeIndex.value = firstEnabledIndex()
  if (!query.value && props.modelValue !== null) {
    emit('update:modelValue', null)
    emit('change', { value: null, option: null })
    emit('clear')
  }
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    if (!isOpen.value) setOpen(true)
    else moveActive(1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (!isOpen.value) {
      setOpen(true)
      activeIndex.value = lastEnabledIndex()
    } else moveActive(-1)
  } else if (event.key === 'Home' && isOpen.value) {
    event.preventDefault()
    activeIndex.value = firstEnabledIndex()
  } else if (event.key === 'End' && isOpen.value) {
    event.preventDefault()
    activeIndex.value = lastEnabledIndex()
  } else if (event.key === 'Enter' && isOpen.value && activeOption.value) {
    event.preventDefault()
    selectOption(activeOption.value)
  } else if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    syncQuery()
    setOpen(false)
  } else if (event.key === 'Tab') {
    syncQuery()
    setOpen(false)
  }
}

function onFocus(event: FocusEvent): void {
  emit('focus', event)
  if (props.openOnFocus) setOpen(true)
}

function onFocusOut(event: FocusEvent): void {
  const next = event.relatedTarget
  if (next instanceof Node && root.value?.contains(next)) return
  emit('blur', event)
  globalThis.setTimeout(() => {
    const rootNode = root.value?.getRootNode()
    const active = typeof ShadowRoot !== 'undefined' && rootNode instanceof ShadowRoot
      ? rootNode.activeElement
      : typeof document === 'undefined' ? null : document.activeElement
    if (!root.value?.contains(active)) {
      syncQuery()
      setOpen(false)
    }
  })
}

function onDocumentPointerDown(event: PointerEvent): void {
  if (root.value && !event.composedPath().includes(root.value)) {
    syncQuery()
    setOpen(false)
  }
}

watch(() => props.modelValue, syncQuery, { immediate: true })
watch(normalizedOptions, syncQuery)
watch(filteredOptions, () => {
  if (activeIndex.value >= filteredOptions.value.length || filteredOptions.value[activeIndex.value]?.disabled) activeIndex.value = firstEnabledIndex()
})

onMounted(() => document.addEventListener('pointerdown', onDocumentPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocumentPointerDown))
</script>

<template>
  <div ref="root" class="uv-field uv-combobox" @focusout="onFocusOut">
    <label v-if="label" class="uv-field__label" :for="inputId">{{ label }} <span v-if="required" class="uv-field__required" aria-hidden="true">*</span></label>
    <div class="uv-combobox__anchor">
      <div class="uv-field__control uv-combobox__control" :class="{ 'uv-field__control--invalid': error }">
        <input
          ref="input"
          :id="inputId"
          class="uv-field__input uv-combobox__input"
          type="text"
          role="combobox"
          autocomplete="off"
          :value="query"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :aria-expanded="isOpen"
          aria-autocomplete="list"
          :aria-controls="listboxId"
          :aria-activedescendant="activeDescendant"
          :aria-invalid="error ? true : undefined"
          :aria-describedby="describedBy"
          @input="onInput"
          @keydown="onKeydown"
          @focus="onFocus"
        >
        <input v-if="name" type="hidden" :name="name" :value="modelValue ?? ''">
        <button v-if="clearable && query && !disabled" type="button" class="uv-combobox__clear" :aria-label="clearLabel" @click="clearSelection">×</button>
        <button type="button" class="uv-combobox__toggle" :aria-label="isOpen ? 'Close options' : 'Open options'" :disabled="disabled" tabindex="-1" @click="setOpen(!isOpen)">
          <span aria-hidden="true">⌄</span>
        </button>
      </div>
      <Transition name="uv-combobox-list">
        <ul v-if="isOpen" :id="listboxId" class="uv-combobox__listbox" role="listbox" :aria-label="label || 'Options'">
          <li v-if="!filteredOptions.length" class="uv-combobox__empty" role="option" aria-disabled="true">{{ emptyText }}</li>
          <li
            v-for="(option, index) in filteredOptions"
            v-else
            :id="`${listboxId}-option-${index}`"
            :key="String(option.value)"
            class="uv-combobox__option"
            :class="{ 'uv-combobox__option--active': index === activeIndex, 'uv-combobox__option--disabled': option.disabled }"
            role="option"
            :aria-selected="option.value === modelValue"
            :aria-disabled="option.disabled || undefined"
            @mousedown.prevent
            @mouseenter="!option.disabled && (activeIndex = index)"
            @click="selectOption(option)"
          >
            <span><strong>{{ option.label }}</strong><small v-if="option.description">{{ option.description }}</small></span>
            <span v-if="option.value === modelValue" aria-hidden="true">✓</span>
          </li>
        </ul>
      </Transition>
    </div>
    <p v-if="hint && !error" :id="hintId" class="uv-field__hint">{{ hint }}</p>
    <p v-if="error" :id="errorId" class="uv-field__error" role="alert">{{ error }}</p>
  </div>
</template>

<style>
@import '../shared.css';
.uv-combobox__anchor{position:relative}.uv-combobox__control{position:relative}.uv-combobox__input{padding-right:5rem}.uv-combobox__clear,.uv-combobox__toggle{display:grid;place-items:center;flex:0 0 auto;width:2rem;height:2rem;padding:0;border:0;border-radius:.4rem;background:transparent;color:var(--uv-color-text-muted,#64748b)}.uv-combobox__clear:hover,.uv-combobox__toggle:hover:not(:disabled){background:var(--uv-color-surface-subtle,#f1f5f9);color:var(--uv-color-text,#0f172a)}.uv-combobox__clear:focus-visible,.uv-combobox__toggle:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-combobox__toggle{margin-right:.3rem}.uv-combobox__listbox{position:absolute;z-index:70;top:calc(100% + .4rem);right:0;left:0;max-height:16rem;overflow:auto;margin:0;padding:.35rem;list-style:none;border:1px solid var(--uv-color-border,#dbe3ef);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface,#fff);box-shadow:var(--uv-shadow-md,0 12px 32px rgb(15 23 42/.15))}.uv-combobox__option{display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:.65rem .75rem;border-radius:.55rem;cursor:pointer}.uv-combobox__option span:first-child{display:grid;gap:.15rem}.uv-combobox__option small{color:var(--uv-color-text-muted,#64748b);font-size:.78rem}.uv-combobox__option--active{background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-combobox__option--disabled{opacity:.5;cursor:not-allowed}.uv-combobox__empty{padding:.8rem;color:var(--uv-color-text-muted,#64748b);text-align:center}.uv-combobox-list-enter-active,.uv-combobox-list-leave-active{transition:opacity var(--uv-duration-fast,120ms),transform var(--uv-duration-fast,120ms)}.uv-combobox-list-enter-from,.uv-combobox-list-leave-to{opacity:0;transform:translateY(-.25rem)}
</style>
