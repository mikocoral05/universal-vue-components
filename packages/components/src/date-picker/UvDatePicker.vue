<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import UvCalendar from '../calendar/UvCalendar.vue'
import type { UvDatePickerChangeDetail, UvDatePickerFormat } from './date-picker.types'

interface Props {
  modelValue?: string
  id?: string
  name?: string
  label?: string
  hint?: string
  error?: string
  placeholder?: string
  locale?: string
  format?: UvDatePickerFormat
  min?: string
  max?: string
  disabledDates?: string[]
  disabledDatesJson?: string
  firstDayOfWeek?: number
  disabled?: boolean
  required?: boolean
  clearable?: boolean
  closeOnSelect?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  id: '',
  name: '',
  label: '',
  hint: '',
  error: '',
  placeholder: 'Select a date',
  locale: '',
  format: 'medium',
  min: '',
  max: '',
  disabledDates: () => [],
  disabledDatesJson: '',
  firstDayOfWeek: 0,
  disabled: false,
  required: false,
  clearable: true,
  closeOnSelect: true
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [detail: UvDatePickerChangeDetail]
  open: []
  close: []
  clear: []
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const root = ref<HTMLElement>()
const trigger = ref<HTMLInputElement>()
const open = ref(false)
const value = ref(props.modelValue)
const generatedId = useId()
const inputId = computed(() => props.id || `uv-date-picker-${generatedId}`)
const dialogId = computed(() => `${inputId.value}-dialog`)
const hintId = computed(() => `${inputId.value}-hint`)
const errorId = computed(() => `${inputId.value}-error`)
const describedBy = computed(() => props.error ? errorId.value : props.hint ? hintId.value : undefined)

function parseIso(input: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input)
  if (!match) return null
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  return date.getFullYear() === Number(match[1]) && date.getMonth() === Number(match[2]) - 1 && date.getDate() === Number(match[3]) ? date : null
}

const displayValue = computed(() => {
  const date = parseIso(value.value)
  if (!date) return ''
  return new Intl.DateTimeFormat(props.locale || undefined, { dateStyle: props.format }).format(date)
})

function setOpen(next: boolean): void {
  if ((props.disabled && next) || open.value === next) return
  open.value = next
  if (next) emit('open')
  else emit('close')
  if (next) {
    nextTick(() => root.value?.querySelector<HTMLButtonElement>('.uv-calendar__day[tabindex="0"]')?.focus())
  } else {
    nextTick(() => trigger.value?.focus())
  }
}

function selectDate(next: string): void {
  value.value = next
  const date = parseIso(next)
  emit('update:modelValue', next)
  emit('change', { value: next, date })
  if (props.closeOnSelect) setOpen(false)
}

function clearValue(): void {
  value.value = ''
  emit('update:modelValue', '')
  emit('change', { value: '', date: null })
  emit('clear')
  trigger.value?.focus()
}

function onDocumentPointerDown(event: PointerEvent): void {
  if (root.value && !event.composedPath().includes(root.value)) setOpen(false)
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && open.value) {
    event.preventDefault()
    setOpen(false)
  } else if ((event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') && !open.value) {
    event.preventDefault()
    setOpen(true)
  }
}

watch(() => props.modelValue, (next) => { value.value = next })
onMounted(() => document.addEventListener('pointerdown', onDocumentPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocumentPointerDown))
</script>

<template>
  <div ref="root" class="uv-field uv-date-picker" @keydown="onKeydown">
    <label v-if="label" class="uv-field__label" :for="inputId">{{ label }} <span v-if="required" class="uv-field__required" aria-hidden="true">*</span></label>
    <div class="uv-date-picker__anchor">
      <div class="uv-field__control" :class="{ 'uv-field__control--invalid': error }">
        <input
          ref="trigger"
          :id="inputId"
          class="uv-field__input uv-date-picker__input"
          type="text"
          role="combobox"
          readonly
          :value="displayValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :aria-expanded="open"
          aria-haspopup="dialog"
          :aria-controls="dialogId"
          :aria-invalid="error ? true : undefined"
          :aria-describedby="describedBy"
          @click="setOpen(!open)"
          @focus="emit('focus', $event)"
          @blur="emit('blur', $event)"
        >
        <input v-if="name" type="hidden" :name="name" :value="value">
        <button v-if="clearable && value && !disabled" type="button" class="uv-date-picker__clear" aria-label="Clear date" @click.stop="clearValue">×</button>
        <button type="button" class="uv-date-picker__toggle" :disabled="disabled" :aria-label="open ? 'Close calendar' : 'Open calendar'" tabindex="-1" @click="setOpen(!open)"><span aria-hidden="true">▣</span></button>
      </div>
      <Transition name="uv-date-picker-popover">
        <div v-if="open" :id="dialogId" class="uv-date-picker__popover" role="dialog" :aria-label="label || 'Choose a date'">
          <UvCalendar
            :model-value="value"
            :label="label || 'Choose a date'"
            :locale="locale"
            :min="min"
            :max="max"
            :first-day-of-week="firstDayOfWeek"
            :disabled-dates="disabledDates"
            :disabled-dates-json="disabledDatesJson"
            @update:model-value="selectDate"
          />
        </div>
      </Transition>
    </div>
    <p v-if="hint && !error" :id="hintId" class="uv-field__hint">{{ hint }}</p>
    <p v-if="error" :id="errorId" class="uv-field__error" role="alert">{{ error }}</p>
  </div>
</template>

<style>
@import '../shared.css';
.uv-date-picker__anchor{position:relative}.uv-date-picker__input{cursor:pointer}.uv-date-picker__clear,.uv-date-picker__toggle{display:grid;place-items:center;flex:none;width:2rem;height:2rem;padding:0;border:0;border-radius:.45rem;background:transparent;color:var(--uv-color-text-muted,#64748b)}.uv-date-picker__clear:hover,.uv-date-picker__toggle:hover:not(:disabled){background:var(--uv-color-surface-subtle,#f1f5f9);color:var(--uv-color-text,#0f172a)}.uv-date-picker__clear:focus-visible,.uv-date-picker__toggle:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-date-picker__toggle{margin-right:.3rem}.uv-date-picker__popover{position:absolute;z-index:80;top:calc(100% + .45rem);left:0}.uv-date-picker-popover-enter-active,.uv-date-picker-popover-leave-active{transition:opacity var(--uv-duration-fast,120ms),transform var(--uv-duration-fast,120ms)}.uv-date-picker-popover-enter-from,.uv-date-picker-popover-leave-to{opacity:0;transform:translateY(-.25rem)}
</style>
