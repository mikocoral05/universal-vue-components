<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import type { UvPopoverPlacement } from './popover.types'

interface Props {
  modelValue?: boolean
  triggerLabel?: string
  ariaLabel?: string
  placement?: UvPopoverPlacement
  disabled?: boolean
  closeOnEscape?: boolean
  closeOnOutside?: boolean
  showArrow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  triggerLabel: 'Open popover',
  ariaLabel: 'Popover',
  placement: 'bottom',
  disabled: false,
  closeOnEscape: true,
  closeOnOutside: true,
  showArrow: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  open: []
  close: []
}>()

const isOpen = ref(props.modelValue)
const root = ref<HTMLElement>()
const trigger = ref<HTMLButtonElement>()
const panel = ref<HTMLElement>()
const panelId = `uv-popover-${useId()}`

function setOpen(value: boolean) {
  if (props.disabled && value) return
  if (value === isOpen.value) return
  isOpen.value = value
  emit('update:modelValue', value)
  if (value) emit('open')
  else emit('close')
}
function toggle() { setOpen(!isOpen.value) }
function close() { setOpen(false) }
function onDocumentPointer(event: PointerEvent) {
  const path = event.composedPath()
  if (isOpen.value && props.closeOnOutside && root.value && !path.includes(root.value)) close()
}
function onDocumentKey(event: KeyboardEvent) {
  if (!isOpen.value || event.key !== 'Escape' || !props.closeOnEscape) return
  event.preventDefault()
  close()
  nextTick(() => trigger.value?.focus())
}

watch(() => props.modelValue, (value) => { isOpen.value = value })

watch(isOpen, (open) => {
  if (typeof document === 'undefined') return
  if (open) {
    document.addEventListener('pointerdown', onDocumentPointer)
    document.addEventListener('keydown', onDocumentKey)
  } else {
    document.removeEventListener('pointerdown', onDocumentPointer)
    document.removeEventListener('keydown', onDocumentKey)
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.removeEventListener('pointerdown', onDocumentPointer)
  document.removeEventListener('keydown', onDocumentKey)
})
</script>

<template>
  <span ref="root" class="uv-popover" :class="`uv-popover--${placement}`">
    <button
      ref="trigger"
      class="uv-popover__trigger"
      type="button"
      aria-haspopup="dialog"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      :disabled="disabled"
      @click="toggle"
    >
      <slot name="trigger">{{ triggerLabel }}</slot>
    </button>
    <Transition name="uv-popover">
      <section
        v-if="isOpen"
        :id="panelId"
        ref="panel"
        class="uv-popover__panel"
        role="dialog"
        :aria-label="ariaLabel"
        tabindex="-1"
      >
        <span v-if="showArrow" class="uv-popover__arrow" aria-hidden="true" />
        <slot :close="close" />
      </section>
    </Transition>
  </span>
</template>

<style>
.uv-popover{position:relative;display:inline-flex;font-family:var(--uv-font-sans,system-ui,sans-serif)}
.uv-popover__trigger{display:inline-flex;align-items:center;justify-content:center;min-height:2.5rem;padding:.6rem .9rem;border:1px solid var(--uv-color-border-strong,#94a3b8);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff);color:var(--uv-color-text,#0f172a);font:inherit;font-weight:700;cursor:pointer}
.uv-popover__trigger:hover:not(:disabled){background:var(--uv-color-surface-muted,#f8fafc)}
.uv-popover__trigger:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-popover__trigger:disabled{opacity:.55;cursor:not-allowed}
.uv-popover__panel{position:absolute;z-index:50;width:max-content;min-width:14rem;max-width:min(22rem,calc(100vw - 2rem));padding:1rem;border:1px solid var(--uv-color-border,#dbe3ef);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface,#fff);color:var(--uv-color-text,#0f172a);box-shadow:var(--uv-shadow-md,0 12px 32px rgb(15 23 42/.18))}
.uv-popover__arrow{position:absolute;width:.7rem;height:.7rem;border:inherit;background:inherit;transform:rotate(45deg)}
.uv-popover--bottom .uv-popover__panel{top:calc(100% + .65rem);left:50%;transform:translateX(-50%)}.uv-popover--bottom .uv-popover__arrow{top:-.4rem;left:calc(50% - .35rem);border-right:0;border-bottom:0}
.uv-popover--top .uv-popover__panel{bottom:calc(100% + .65rem);left:50%;transform:translateX(-50%)}.uv-popover--top .uv-popover__arrow{bottom:-.4rem;left:calc(50% - .35rem);border-left:0;border-top:0}
.uv-popover--left .uv-popover__panel{right:calc(100% + .65rem);top:50%;transform:translateY(-50%)}.uv-popover--left .uv-popover__arrow{right:-.4rem;top:calc(50% - .35rem);border-left:0;border-bottom:0}
.uv-popover--right .uv-popover__panel{left:calc(100% + .65rem);top:50%;transform:translateY(-50%)}.uv-popover--right .uv-popover__arrow{left:-.4rem;top:calc(50% - .35rem);border-right:0;border-top:0}
.uv-popover-enter-active,.uv-popover-leave-active{transition:opacity var(--uv-duration-fast,120ms),scale var(--uv-duration-fast,120ms)}.uv-popover-enter-from,.uv-popover-leave-to{opacity:0;scale:.97}
@media(max-width:480px){.uv-popover--left .uv-popover__panel,.uv-popover--right .uv-popover__panel{left:50%;right:auto;top:calc(100% + .65rem);transform:translateX(-50%)}}
</style>
