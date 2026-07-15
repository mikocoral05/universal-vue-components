<script setup lang="ts">
import { computed, nextTick, ref, useId, watch } from 'vue'
import type { UvCalendarDateDetail, UvCalendarMonthDetail } from './calendar.types'

interface Props {
  modelValue?: string
  id?: string
  name?: string
  label?: string
  locale?: string
  min?: string
  max?: string
  firstDayOfWeek?: number
  disabledDates?: string[]
  disabledDatesJson?: string
  showOutsideDays?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  id: '',
  name: '',
  label: 'Choose a date',
  locale: '',
  min: '',
  max: '',
  firstDayOfWeek: 0,
  disabledDates: () => [],
  disabledDatesJson: '',
  showOutsideDays: true,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [detail: UvCalendarDateDetail]
  'month-change': [detail: UvCalendarMonthDetail]
}>()

const root = ref<HTMLElement>()
const generatedId = useId()
const calendarId = computed(() => props.id || `uv-calendar-${generatedId}`)

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

function toIso(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function fromIso(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return null
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  return toIso(date) === value ? date : null
}

function addDays(value: string, amount: number): string {
  const date = fromIso(value) ?? new Date()
  date.setDate(date.getDate() + amount)
  return toIso(date)
}

function addMonths(value: string, amount: number): string {
  const date = fromIso(value) ?? new Date()
  const day = date.getDate()
  date.setDate(1)
  date.setMonth(date.getMonth() + amount)
  const maxDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  date.setDate(Math.min(day, maxDay))
  return toIso(date)
}

function normalizeFirstDay(value: number): number {
  return ((Math.trunc(value) % 7) + 7) % 7
}

function parseStringArray(value: string): string[] {
  if (!value) return []
  try {
    const parsed: unknown = JSON.parse(value)
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []
  } catch {
    return []
  }
}

const today = toIso(new Date())
const initialDate = fromIso(props.modelValue) ?? fromIso(props.min) ?? new Date()
const viewYear = ref(initialDate.getFullYear())
const viewMonth = ref(initialDate.getMonth())
const activeDate = ref(props.modelValue || toIso(initialDate))
const internalValue = ref(props.modelValue)
const disabledSet = computed(() => new Set(props.disabledDates.length ? props.disabledDates : parseStringArray(props.disabledDatesJson)))
const firstDay = computed(() => normalizeFirstDay(props.firstDayOfWeek))
const locale = computed(() => props.locale || undefined)
const monthKey = computed(() => `${viewYear.value}-${pad(viewMonth.value + 1)}`)

const monthLabel = computed(() => new Intl.DateTimeFormat(locale.value, { month: 'long', year: 'numeric' }).format(new Date(viewYear.value, viewMonth.value, 1)))
const fullDateFormatter = computed(() => new Intl.DateTimeFormat(locale.value, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
const weekdayFormatter = computed(() => new Intl.DateTimeFormat(locale.value, { weekday: 'short' }))
const weekdayLabels = computed(() => Array.from({ length: 7 }, (_, index) => {
  const dayIndex = (firstDay.value + index) % 7
  return weekdayFormatter.value.format(new Date(2021, 7, 1 + dayIndex))
}))

interface CalendarCell {
  iso: string
  day: number
  outside: boolean
  disabled: boolean
}

function dateDisabled(iso: string): boolean {
  return props.disabled || Boolean((props.min && iso < props.min) || (props.max && iso > props.max) || disabledSet.value.has(iso))
}

const cells = computed<CalendarCell[]>(() => {
  const first = new Date(viewYear.value, viewMonth.value, 1)
  const offset = (first.getDay() - firstDay.value + 7) % 7
  const start = new Date(viewYear.value, viewMonth.value, 1 - offset)
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start)
    date.setDate(start.getDate() + index)
    const iso = toIso(date)
    return {
      iso,
      day: date.getDate(),
      outside: date.getMonth() !== viewMonth.value,
      disabled: dateDisabled(iso)
    }
  })
})

const previousDisabled = computed(() => Boolean(props.min && monthKey.value <= props.min.slice(0, 7)))
const nextDisabled = computed(() => Boolean(props.max && monthKey.value >= props.max.slice(0, 7)))

function focusDate(iso: string): void {
  nextTick(() => root.value?.querySelector<HTMLButtonElement>(`[data-date="${iso}"]`)?.focus())
}

function setViewFromIso(iso: string): void {
  const date = fromIso(iso)
  if (!date) return
  viewYear.value = date.getFullYear()
  viewMonth.value = date.getMonth()
}

function moveMonth(amount: number): void {
  const date = new Date(viewYear.value, viewMonth.value + amount, 1)
  viewYear.value = date.getFullYear()
  viewMonth.value = date.getMonth()
  const preferred = addMonths(activeDate.value || toIso(date), amount)
  activeDate.value = preferred
  emit('month-change', { year: viewYear.value, month: viewMonth.value + 1 })
  focusDate(preferred)
}

function selectDate(iso: string): void {
  if (dateDisabled(iso)) return
  internalValue.value = iso
  activeDate.value = iso
  setViewFromIso(iso)
  const date = fromIso(iso)
  if (!date) return
  emit('update:modelValue', iso)
  emit('change', { value: iso, date })
}

function moveActive(amount: number): void {
  let next = activeDate.value || internalValue.value || today
  for (let attempts = 0; attempts < 370; attempts += 1) {
    next = addDays(next, amount)
    if (!dateDisabled(next)) break
  }
  activeDate.value = next
  setViewFromIso(next)
  focusDate(next)
}

function onDateKeydown(event: KeyboardEvent, iso: string): void {
  activeDate.value = iso
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    moveActive(-1)
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    moveActive(1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    moveActive(-7)
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    moveActive(7)
  } else if (event.key === 'Home') {
    event.preventDefault()
    const date = fromIso(iso)
    if (date) moveActive(-((date.getDay() - firstDay.value + 7) % 7))
  } else if (event.key === 'End') {
    event.preventDefault()
    const date = fromIso(iso)
    if (date) moveActive(6 - ((date.getDay() - firstDay.value + 7) % 7))
  } else if (event.key === 'PageUp') {
    event.preventDefault()
    moveMonth(-1)
  } else if (event.key === 'PageDown') {
    event.preventDefault()
    moveMonth(1)
  }
}

watch(() => props.modelValue, (value) => {
  internalValue.value = value
  if (fromIso(value)) {
    activeDate.value = value
    setViewFromIso(value)
  }
})
</script>

<template>
  <section ref="root" class="uv-calendar" :aria-label="label">
    <input v-if="name" type="hidden" :name="name" :value="internalValue">
    <div class="uv-calendar__header">
      <button type="button" class="uv-calendar__nav" :disabled="disabled || previousDisabled" aria-label="Previous month" @click="moveMonth(-1)">‹</button>
      <h2 :id="`${calendarId}-heading`" class="uv-calendar__heading" aria-live="polite">{{ monthLabel }}</h2>
      <button type="button" class="uv-calendar__nav" :disabled="disabled || nextDisabled" aria-label="Next month" @click="moveMonth(1)">›</button>
    </div>
    <table class="uv-calendar__grid" role="grid" :aria-labelledby="`${calendarId}-heading`">
      <thead>
        <tr role="row">
          <th v-for="weekday in weekdayLabels" :key="weekday" scope="col" role="columnheader"><abbr :title="weekday">{{ weekday }}</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in 6" :key="week" role="row">
          <td v-for="cell in cells.slice((week - 1) * 7, week * 7)" :key="cell.iso" role="gridcell" :aria-selected="cell.iso === internalValue">
            <span v-if="cell.outside && !showOutsideDays" class="uv-calendar__blank" aria-hidden="true" />
            <button
              v-else
              type="button"
              class="uv-calendar__day"
              :class="{ 'uv-calendar__day--outside': cell.outside, 'uv-calendar__day--selected': cell.iso === internalValue, 'uv-calendar__day--today': cell.iso === today }"
              :data-date="cell.iso"
              :disabled="cell.disabled"
              :tabindex="cell.iso === activeDate ? 0 : -1"
              :aria-label="fullDateFormatter.format(fromIso(cell.iso) ?? new Date())"
              :aria-current="cell.iso === today ? 'date' : undefined"
              @focus="activeDate = cell.iso"
              @keydown="onDateKeydown($event, cell.iso)"
              @click="selectDate(cell.iso)"
            >{{ cell.day }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style>
.uv-calendar{display:grid;gap:.75rem;width:min(100%,20rem);padding:.9rem;border:1px solid var(--uv-color-border,#dbe3ef);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface,#fff);color:var(--uv-color-text,#0f172a);font-family:var(--uv-font-sans,system-ui,sans-serif)}
.uv-calendar__header{display:grid;grid-template-columns:2.25rem 1fr 2.25rem;align-items:center;gap:.5rem}.uv-calendar__heading{margin:0;font-size:1rem;text-align:center}.uv-calendar__nav{display:grid;place-items:center;width:2.25rem;height:2.25rem;border:1px solid transparent;border-radius:.55rem;background:transparent;color:inherit;font-size:1.4rem}.uv-calendar__nav:hover:not(:disabled){background:var(--uv-color-surface-subtle,#f8fafc);color:var(--uv-color-primary,#2563eb)}.uv-calendar__nav:disabled{opacity:.35}.uv-calendar button:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}
.uv-calendar__grid{width:100%;border-collapse:separate;border-spacing:.15rem;table-layout:fixed}.uv-calendar__grid th{height:1.8rem;color:var(--uv-color-text-muted,#64748b);font-size:.72rem;font-weight:700;text-align:center}.uv-calendar__grid abbr{text-decoration:none}.uv-calendar__grid td{padding:0;text-align:center}.uv-calendar__day,.uv-calendar__blank{display:grid;place-items:center;width:100%;aspect-ratio:1;border:0;border-radius:.55rem}.uv-calendar__day{background:transparent;color:inherit;font:inherit;cursor:pointer}.uv-calendar__day:hover:not(:disabled){background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-calendar__day--outside{color:var(--uv-color-text-muted,#94a3b8)}.uv-calendar__day--today{box-shadow:inset 0 0 0 1px var(--uv-color-primary,#2563eb)}.uv-calendar__day--selected{background:var(--uv-color-primary,#2563eb)!important;color:var(--uv-color-primary-contrast,#fff)!important;font-weight:700}.uv-calendar__day:disabled{opacity:.3;cursor:not-allowed}
</style>
