<script setup lang="ts">
import { computed, nextTick, ref, useId, watch } from 'vue'
import type { UvTagInputChangeDetail, UvTagInputInvalidDetail, UvTagInputInvalidReason, UvTagInputItemDetail } from './tag-input.types'

interface Props {
  modelValue?: string[]
  valuesJson?: string
  suggestions?: string[]
  suggestionsJson?: string
  id?: string
  name?: string
  label?: string
  hint?: string
  error?: string
  placeholder?: string
  separator?: string
  maxTags?: number
  pattern?: string
  disabled?: boolean
  required?: boolean
  allowDuplicates?: boolean
  caseSensitive?: boolean
  addOnBlur?: boolean
  clearable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  valuesJson: '',
  suggestions: () => [],
  suggestionsJson: '',
  id: '',
  name: '',
  label: '',
  hint: '',
  error: '',
  placeholder: 'Add a tag',
  separator: ',',
  maxTags: 0,
  pattern: '',
  disabled: false,
  required: false,
  allowDuplicates: false,
  caseSensitive: false,
  addOnBlur: true,
  clearable: true
})

const emit = defineEmits<{
  'update:modelValue': [values: string[]]
  change: [detail: UvTagInputChangeDetail]
  add: [detail: UvTagInputItemDetail]
  remove: [detail: UvTagInputItemDetail]
  invalid: [detail: UvTagInputInvalidDetail]
  search: [query: string]
  clear: []
}>()

function parseStringArray(value: string): string[] {
  if (!value) return []
  try {
    const parsed: unknown = JSON.parse(value)
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []
  } catch {
    return []
  }
}

const initialValues = props.modelValue ?? parseStringArray(props.valuesJson)
const values = ref([...initialValues])
const query = ref('')
const open = ref(false)
const activeIndex = ref(-1)
const internalError = ref('')
const input = ref<HTMLInputElement>()
const generatedId = useId()
const inputId = computed(() => props.id || `uv-tag-input-${generatedId}`)
const listboxId = computed(() => `${inputId.value}-listbox`)
const hintId = computed(() => `${inputId.value}-hint`)
const errorId = computed(() => `${inputId.value}-error`)
const displayedError = computed(() => props.error || internalError.value)
const describedBy = computed(() => displayedError.value ? errorId.value : props.hint ? hintId.value : undefined)
const normalizedSuggestions = computed(() => props.suggestions.length ? props.suggestions : parseStringArray(props.suggestionsJson))
const comparable = (value: string) => props.caseSensitive ? value : value.toLocaleLowerCase()
const filteredSuggestions = computed(() => {
  const needle = comparable(query.value.trim())
  return normalizedSuggestions.value.filter((suggestion) => {
    const alreadyUsed = !props.allowDuplicates && values.value.some((tag) => comparable(tag) === comparable(suggestion))
    return !alreadyUsed && (!needle || comparable(suggestion).includes(needle))
  })
})
const activeDescendant = computed(() => activeIndex.value >= 0 ? `${listboxId.value}-option-${activeIndex.value}` : undefined)
const limitReached = computed(() => props.maxTags > 0 && values.value.length >= props.maxTags)

function invalid(value: string, reason: UvTagInputInvalidReason): void {
  const messages: Record<UvTagInputInvalidReason, string> = {
    empty: 'Enter a tag before adding it.',
    duplicate: 'That tag has already been added.',
    maximum: `You can add up to ${props.maxTags} tags.`,
    pattern: 'That tag does not match the required format.'
  }
  internalError.value = messages[reason]
  emit('invalid', { value, reason })
}

function publish(): void {
  const next = [...values.value]
  emit('update:modelValue', next)
  emit('change', { values: next })
}

function addTag(raw: string): boolean {
  const value = raw.trim()
  if (!value) {
    invalid(value, 'empty')
    return false
  }
  if (limitReached.value) {
    invalid(value, 'maximum')
    return false
  }
  if (!props.allowDuplicates && values.value.some((tag) => comparable(tag) === comparable(value))) {
    invalid(value, 'duplicate')
    return false
  }
  if (props.pattern) {
    try {
      if (!new RegExp(props.pattern).test(value)) {
        invalid(value, 'pattern')
        return false
      }
    } catch {
      invalid(value, 'pattern')
      return false
    }
  }
  const index = values.value.length
  values.value.push(value)
  query.value = ''
  internalError.value = ''
  open.value = false
  activeIndex.value = -1
  publish()
  emit('add', { value, index })
  return true
}

function removeTag(index: number): void {
  if (props.disabled) return
  const [value] = values.value.splice(index, 1)
  if (value === undefined) return
  internalError.value = ''
  publish()
  emit('remove', { value, index })
  nextTick(() => input.value?.focus())
}

function clearTags(): void {
  if (props.disabled || !values.value.length) return
  values.value = []
  publish()
  emit('clear')
  input.value?.focus()
}

function onInput(event: Event): void {
  query.value = (event.target as HTMLInputElement).value
  internalError.value = ''
  open.value = Boolean(filteredSuggestions.value.length)
  activeIndex.value = filteredSuggestions.value.length ? 0 : -1
  emit('search', query.value)
}

function onKeydown(event: KeyboardEvent): void {
  if ((event.key === 'Enter' || event.key === props.separator) && query.value) {
    event.preventDefault()
    if (event.key === 'Enter' && open.value && activeIndex.value >= 0) addTag(filteredSuggestions.value[activeIndex.value] ?? query.value)
    else addTag(query.value)
  } else if (event.key === 'Backspace' && !query.value && values.value.length) {
    event.preventDefault()
    removeTag(values.value.length - 1)
  } else if (event.key === 'ArrowDown' && filteredSuggestions.value.length) {
    event.preventDefault()
    open.value = true
    activeIndex.value = (activeIndex.value + 1) % filteredSuggestions.value.length
  } else if (event.key === 'ArrowUp' && filteredSuggestions.value.length) {
    event.preventDefault()
    open.value = true
    activeIndex.value = (activeIndex.value - 1 + filteredSuggestions.value.length) % filteredSuggestions.value.length
  } else if (event.key === 'Escape') {
    open.value = false
    activeIndex.value = -1
  }
}

function onBlur(): void {
  globalThis.setTimeout(() => {
    if (props.addOnBlur && query.value) addTag(query.value)
    open.value = false
  })
}

watch(() => props.modelValue, (next) => {
  if (next) values.value = [...next]
}, { deep: true })
watch(() => props.valuesJson, (next) => {
  if (props.modelValue === undefined) values.value = parseStringArray(next)
})
watch(filteredSuggestions, (next) => {
  if (activeIndex.value >= next.length) activeIndex.value = next.length ? 0 : -1
})
</script>

<template>
  <div class="uv-field uv-tag-input">
    <label v-if="label" class="uv-field__label" :for="inputId">{{ label }} <span v-if="required" class="uv-field__required" aria-hidden="true">*</span></label>
    <div class="uv-tag-input__anchor">
      <div class="uv-field__control uv-tag-input__control" :class="{ 'uv-field__control--invalid': displayedError }" @click="input?.focus()">
        <span v-for="(tag, index) in values" :key="`${tag}-${index}`" class="uv-tag-input__tag">
          <span>{{ tag }}</span>
          <button type="button" :disabled="disabled" :aria-label="`Remove ${tag}`" @click.stop="removeTag(index)">×</button>
        </span>
        <input
          ref="input"
          :id="inputId"
          class="uv-tag-input__input"
          type="text"
          role="combobox"
          autocomplete="off"
          :value="query"
          :placeholder="values.length ? '' : placeholder"
          :disabled="disabled || limitReached"
          :required="required && !values.length"
          :aria-expanded="open"
          aria-autocomplete="list"
          :aria-controls="listboxId"
          :aria-activedescendant="activeDescendant"
          :aria-invalid="displayedError ? true : undefined"
          :aria-describedby="describedBy"
          @input="onInput"
          @focus="open = Boolean(filteredSuggestions.length)"
          @keydown="onKeydown"
          @blur="onBlur"
        >
        <button v-if="clearable && values.length && !disabled" type="button" class="uv-tag-input__clear" aria-label="Clear all tags" @click.stop="clearTags">×</button>
        <input v-for="(tag, index) in values" :key="`hidden-${index}`" type="hidden" :name="name ? `${name}[]` : undefined" :value="tag">
      </div>
      <ul v-if="open && filteredSuggestions.length" :id="listboxId" class="uv-tag-input__listbox" role="listbox" :aria-label="`${label || 'Tag'} suggestions`">
        <li
          v-for="(suggestion, index) in filteredSuggestions"
          :id="`${listboxId}-option-${index}`"
          :key="suggestion"
          class="uv-tag-input__option"
          :class="{ 'uv-tag-input__option--active': index === activeIndex }"
          role="option"
          aria-selected="false"
          @mousedown.prevent
          @mouseenter="activeIndex = index"
          @click="addTag(suggestion)"
        >{{ suggestion }}</li>
      </ul>
    </div>
    <p v-if="hint && !displayedError" :id="hintId" class="uv-field__hint">{{ hint }}</p>
    <p v-if="displayedError" :id="errorId" class="uv-field__error" role="alert">{{ displayedError }}</p>
  </div>
</template>

<style>
@import '../shared.css';
.uv-tag-input__anchor{position:relative}.uv-tag-input__control{flex-wrap:wrap;gap:.35rem;padding:.35rem;cursor:text}.uv-tag-input__tag{display:inline-flex;align-items:center;gap:.25rem;max-width:100%;padding:.3rem .35rem .3rem .55rem;border-radius:999px;background:color-mix(in srgb,var(--uv-color-primary,#2563eb) 12%,white);color:var(--uv-color-primary,#2563eb);font-size:.8rem;font-weight:650}.uv-tag-input__tag>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uv-tag-input__tag button,.uv-tag-input__clear{display:grid;place-items:center;width:1.35rem;height:1.35rem;padding:0;border:0;border-radius:50%;background:transparent;color:currentColor}.uv-tag-input__tag button:hover,.uv-tag-input__clear:hover{background:rgb(15 23 42/.1)}.uv-tag-input__tag button:focus-visible,.uv-tag-input__clear:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-tag-input__input{flex:1 1 8rem;min-width:6rem;padding:.35rem;border:0;outline:0;background:transparent;color:inherit;font:inherit}.uv-tag-input__clear{flex:none;margin-left:auto;color:var(--uv-color-text-muted,#64748b);font-size:1.1rem}.uv-tag-input__listbox{position:absolute;z-index:70;top:calc(100% + .4rem);right:0;left:0;max-height:13rem;overflow:auto;margin:0;padding:.35rem;list-style:none;border:1px solid var(--uv-color-border,#dbe3ef);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface,#fff);box-shadow:var(--uv-shadow-md,0 12px 32px rgb(15 23 42/.15))}.uv-tag-input__option{padding:.6rem .7rem;border-radius:.5rem;cursor:pointer}.uv-tag-input__option--active{background:var(--uv-color-surface-subtle,#f1f5f9)}
</style>
