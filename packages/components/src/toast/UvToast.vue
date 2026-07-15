<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { UvToastDismissDetail, UvToastItem, UvToastPosition } from './toast.types'

interface Props {
  items?: UvToastItem[]
  itemsJson?: string
  position?: UvToastPosition
  defaultDuration?: number
  maxVisible?: number
  pauseOnHover?: boolean
  regionLabel?: string
  dismissLabel?: string
}

interface ToastRecord {
  item: UvToastItem
  remaining: number
  startedAt: number
  timer?: ReturnType<typeof setTimeout>
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  itemsJson: '',
  position: 'top-right',
  defaultDuration: 5000,
  maxVisible: 5,
  pauseOnHover: true,
  regionLabel: 'Notifications',
  dismissLabel: 'Dismiss notification'
})

const emit = defineEmits<{
  'update:items': [items: UvToastItem[]]
  dismiss: [detail: UvToastDismissDetail]
  empty: []
}>()

function isToastItem(value: unknown): value is UvToastItem {
  if (!value || typeof value !== 'object') return false
  const item = value as Partial<UvToastItem>
  return (typeof item.id === 'string' || typeof item.id === 'number') && typeof item.message === 'string'
}

function parseItems(): UvToastItem[] {
  if (props.items.length) return props.items.filter(isToastItem)
  if (!props.itemsJson) return []
  try {
    const parsed: unknown = JSON.parse(props.itemsJson)
    return Array.isArray(parsed) ? parsed.filter(isToastItem) : []
  } catch {
    return []
  }
}

function createRecords(items: UvToastItem[]): ToastRecord[] {
  return items.map((item) => ({
    item: { ...item, variant: item.variant ?? 'info', dismissible: item.dismissible ?? true },
    remaining: Math.max(0, item.duration ?? props.defaultDuration),
    startedAt: 0
  }))
}

const records = ref<ToastRecord[]>(createRecords(parseItems()))
const displayedRecords = computed(() => records.value.slice(0, Math.max(1, props.maxVisible)))
const currentItems = computed(() => records.value.map((record) => record.item))
let mounted = false

function clearTimer(record: ToastRecord): void {
  if (record.timer !== undefined) clearTimeout(record.timer)
  record.timer = undefined
}

function schedule(record: ToastRecord): void {
  clearTimer(record)
  if (!mounted || record.remaining <= 0) return
  record.startedAt = Date.now()
  record.timer = setTimeout(() => dismiss(record, 'timeout'), record.remaining)
}

function pause(record: ToastRecord): void {
  if (!props.pauseOnHover || record.timer === undefined) return
  record.remaining = Math.max(0, record.remaining - (Date.now() - record.startedAt))
  clearTimer(record)
}

function resume(record: ToastRecord): void {
  if (!props.pauseOnHover || record.timer !== undefined || record.remaining <= 0) return
  schedule(record)
}

function dismiss(record: ToastRecord, reason: UvToastDismissDetail['reason']): void {
  clearTimer(record)
  const index = records.value.findIndex((candidate) => candidate.item.id === record.item.id)
  if (index < 0) return
  const [removed] = records.value.splice(index, 1)
  if (!removed) return
  const nextItems = currentItems.value
  emit('update:items', nextItems)
  emit('dismiss', { id: removed.item.id, item: removed.item, reason })
  if (!records.value.length) emit('empty')
  else nextTick(() => displayedRecords.value.forEach((candidate) => {
    if (candidate.timer === undefined) schedule(candidate)
  }))
}

function syncItems(): void {
  for (const record of records.value) clearTimer(record)
  records.value = createRecords(parseItems())
  if (mounted) nextTick(() => displayedRecords.value.forEach(schedule))
}

function onFocusOut(record: ToastRecord, event: FocusEvent): void {
  const current = event.currentTarget as HTMLElement | null
  const next = event.relatedTarget
  if (!current || !(next instanceof Node) || !current.contains(next)) resume(record)
}

watch(() => [props.items, props.itemsJson, props.defaultDuration, props.maxVisible] as const, syncItems, { deep: true })

onMounted(() => {
  mounted = true
  displayedRecords.value.forEach(schedule)
})

onBeforeUnmount(() => {
  mounted = false
  records.value.forEach(clearTimer)
})
</script>

<template>
  <div
    class="uv-toast-region"
    :class="`uv-toast-region--${position}`"
    role="region"
    :aria-label="regionLabel"
    aria-live="polite"
    aria-relevant="additions removals"
  >
    <TransitionGroup name="uv-toast" tag="div" class="uv-toast-region__list">
      <article
        v-for="record in displayedRecords"
        :key="record.item.id"
        class="uv-toast"
        :class="`uv-toast--${record.item.variant}`"
        :role="record.item.variant === 'danger' ? 'alert' : 'status'"
        :aria-live="record.item.variant === 'danger' ? 'assertive' : 'polite'"
        @mouseenter="pause(record)"
        @mouseleave="resume(record)"
        @focusin="pause(record)"
        @focusout="onFocusOut(record, $event)"
      >
        <span class="uv-toast__icon" aria-hidden="true">
          {{ record.item.variant === 'success' ? '✓' : record.item.variant === 'warning' ? '!' : record.item.variant === 'danger' ? '×' : 'i' }}
        </span>
        <div class="uv-toast__content">
          <strong v-if="record.item.title" class="uv-toast__title">{{ record.item.title }}</strong>
          <p class="uv-toast__message">{{ record.item.message }}</p>
        </div>
        <button
          v-if="record.item.dismissible"
          type="button"
          class="uv-toast__dismiss"
          :aria-label="`${dismissLabel}: ${record.item.title || record.item.message}`"
          @click="dismiss(record, 'manual')"
        >×</button>
      </article>
    </TransitionGroup>
  </div>
</template>

<style>
.uv-toast-region{z-index:1100;font-family:var(--uv-font-sans,system-ui,sans-serif);pointer-events:none}.uv-toast-region:not(.uv-toast-region--inline){position:fixed;padding:1rem}.uv-toast-region--top-left{top:0;left:0}.uv-toast-region--top-center{top:0;left:50%;transform:translateX(-50%)}.uv-toast-region--top-right{top:0;right:0}.uv-toast-region--bottom-left{bottom:0;left:0}.uv-toast-region--bottom-center{bottom:0;left:50%;transform:translateX(-50%)}.uv-toast-region--bottom-right{right:0;bottom:0}.uv-toast-region--inline{position:relative;width:min(100%,28rem)}.uv-toast-region__list{display:grid;gap:.75rem;width:min(calc(100vw - 2rem),28rem)}.uv-toast{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:.75rem;align-items:start;padding:.9rem 1rem;border:1px solid var(--uv-color-border,#dbe3ef);border-left-width:4px;border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface,#fff);color:var(--uv-color-text,#0f172a);box-shadow:var(--uv-shadow-md,0 12px 32px rgb(15 23 42/.15));pointer-events:auto}.uv-toast--success{border-left-color:var(--uv-color-success,#15803d)}.uv-toast--info{border-left-color:var(--uv-color-primary,#2563eb)}.uv-toast--warning{border-left-color:var(--uv-color-warning,#b45309)}.uv-toast--danger{border-left-color:var(--uv-color-danger,#dc2626)}.uv-toast__icon{display:grid;place-items:center;width:1.5rem;height:1.5rem;border-radius:999px;background:var(--uv-color-surface-subtle,#f8fafc);font-weight:800}.uv-toast--success .uv-toast__icon{color:var(--uv-color-success,#15803d)}.uv-toast--info .uv-toast__icon{color:var(--uv-color-primary,#2563eb)}.uv-toast--warning .uv-toast__icon{color:var(--uv-color-warning,#b45309)}.uv-toast--danger .uv-toast__icon{color:var(--uv-color-danger,#dc2626)}.uv-toast__content{min-width:0}.uv-toast__title{display:block;margin-bottom:.15rem}.uv-toast__message{margin:0;color:var(--uv-color-text-muted,#64748b);font-size:.9rem;line-height:1.45}.uv-toast__dismiss{display:grid;place-items:center;width:1.75rem;height:1.75rem;padding:0;border:0;border-radius:.4rem;background:transparent;color:inherit;font-size:1.25rem;line-height:1}.uv-toast__dismiss:hover{background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-toast__dismiss:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-toast-enter-active,.uv-toast-leave-active{transition:opacity var(--uv-duration-normal,180ms),transform var(--uv-duration-normal,180ms)}.uv-toast-enter-from,.uv-toast-leave-to{opacity:0;transform:translateY(-.5rem)}.uv-toast-leave-active{position:absolute}
</style>
