<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import type { UvDrawerCloseReason, UvDrawerPlacement } from './drawer.types'

interface Props {
  modelValue?: boolean
  title?: string
  description?: string
  ariaLabel?: string
  placement?: UvDrawerPlacement
  size?: string
  closeOnEscape?: boolean
  closeOnBackdrop?: boolean
  lockScroll?: boolean
  dismissLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  description: '',
  ariaLabel: 'Drawer',
  placement: 'right',
  size: '24rem',
  closeOnEscape: true,
  closeOnBackdrop: true,
  lockScroll: true,
  dismissLabel: 'Close drawer'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  open: []
  close: [reason: UvDrawerCloseReason]
}>()

const isOpen = ref(props.modelValue)
const panel = ref<HTMLElement>()
const titleId = `uv-drawer-title-${useId()}`
const descriptionId = `uv-drawer-description-${useId()}`
const panelStyle = computed(() => ({ '--uv-drawer-size': props.size }))
let previousFocus: HTMLElement | null = null
let previousOverflow = ''
let mounted = false
let scrollLocked = false

function focusableElements(): HTMLElement[] {
  if (!panel.value) return []
  const selector = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'
  const elements = [...panel.value.querySelectorAll<HTMLElement>(selector)]
  const rootNode = panel.value.getRootNode()
  if (typeof ShadowRoot !== 'undefined' && rootNode instanceof ShadowRoot) {
    elements.push(...rootNode.host.querySelectorAll<HTMLElement>(selector))
  }
  return [...new Set(elements)].filter((element) => element.getAttribute('aria-hidden') !== 'true')
}

function activeElement(): Element | null {
  const rootNode = panel.value?.getRootNode()
  if (typeof ShadowRoot !== 'undefined' && rootNode instanceof ShadowRoot) return rootNode.activeElement
  return typeof document === 'undefined' ? null : document.activeElement
}

function setScrollLock(value: boolean): void {
  if (typeof document === 'undefined' || !props.lockScroll) return
  if (value && !scrollLocked) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    scrollLocked = true
  } else if (!value && scrollLocked) {
    document.body.style.overflow = previousOverflow
    scrollLocked = false
  }
}

async function applyOpenEffects(): Promise<void> {
  if (!mounted || typeof document === 'undefined') return
  previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
  setScrollLock(true)
  document.addEventListener('keydown', onDocumentKey)
  await nextTick()
  const target = panel.value?.querySelector<HTMLElement>('[autofocus]') ?? focusableElements()[0] ?? panel.value
  target?.focus()
  emit('open')
}

function clearOpenEffects(restoreFocus = true): void {
  if (typeof document !== 'undefined') document.removeEventListener('keydown', onDocumentKey)
  setScrollLock(false)
  if (restoreFocus) nextTick(() => previousFocus?.focus())
}

function setOpen(value: boolean, reason: UvDrawerCloseReason = 'dismiss'): void {
  if (value === isOpen.value) return
  isOpen.value = value
  emit('update:modelValue', value)
  if (!value) emit('close', reason)
}

function requestClose(reason: UvDrawerCloseReason = 'dismiss'): void {
  setOpen(false, reason)
}

function onDocumentKey(event: KeyboardEvent): void {
  if (!isOpen.value) return
  if (event.key === 'Escape' && props.closeOnEscape) {
    event.preventDefault()
    requestClose('escape')
    return
  }
  if (event.key !== 'Tab') return
  const focusable = focusableElements()
  if (!focusable.length) {
    event.preventDefault()
    panel.value?.focus()
    return
  }
  const first = focusable[0]
  const last = focusable.at(-1)
  if (!first || !last) return
  const eventTarget = event.composedPath()[0]
  const active = eventTarget instanceof Element ? eventTarget : activeElement()
  if (event.shiftKey && (active === first || active === panel.value)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

function onBackdrop(event: MouseEvent): void {
  if (event.target === event.currentTarget && props.closeOnBackdrop) requestClose('backdrop')
}

watch(() => props.modelValue, (value) => {
  isOpen.value = value
})

watch(isOpen, (value, previous) => {
  if (value && !previous) applyOpenEffects()
  else if (!value && previous) clearOpenEffects()
})

onMounted(() => {
  mounted = true
  if (isOpen.value) applyOpenEffects()
})

onBeforeUnmount(() => {
  mounted = false
  clearOpenEffects(false)
})
</script>

<template>
  <Transition name="uv-drawer-fade">
    <div v-if="isOpen" class="uv-drawer__backdrop" @mousedown="onBackdrop">
      <section
        ref="panel"
        class="uv-drawer"
        :class="`uv-drawer--${placement}`"
        :style="panelStyle"
        role="dialog"
        aria-modal="true"
        :aria-label="title ? undefined : ariaLabel"
        :aria-labelledby="title ? titleId : undefined"
        :aria-describedby="description ? descriptionId : undefined"
        tabindex="-1"
      >
        <header class="uv-drawer__header">
          <div>
            <h2 v-if="title" :id="titleId">{{ title }}</h2>
            <p v-if="description" :id="descriptionId">{{ description }}</p>
          </div>
          <button type="button" class="uv-drawer__dismiss" :aria-label="dismissLabel" @click="requestClose('dismiss')">×</button>
        </header>
        <div class="uv-drawer__body"><slot :close="requestClose" /></div>
        <footer v-if="$slots.footer" class="uv-drawer__footer"><slot name="footer" :close="requestClose" /></footer>
      </section>
    </div>
  </Transition>
</template>

<style>
.uv-drawer__backdrop{position:fixed;z-index:1050;inset:0;background:var(--uv-color-overlay,rgb(15 23 42/.58));font-family:var(--uv-font-sans,system-ui,sans-serif)}.uv-drawer{position:absolute;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--uv-color-border,#dbe3ef);background:var(--uv-color-surface,#fff);color:var(--uv-color-text,#0f172a);box-shadow:var(--uv-shadow-md,0 12px 32px rgb(15 23 42/.18))}.uv-drawer--left,.uv-drawer--right{top:0;bottom:0;width:min(var(--uv-drawer-size,24rem),100vw)}.uv-drawer--left{left:0;border-radius:0 var(--uv-radius-xl,1.25rem) var(--uv-radius-xl,1.25rem) 0}.uv-drawer--right{right:0;border-radius:var(--uv-radius-xl,1.25rem) 0 0 var(--uv-radius-xl,1.25rem)}.uv-drawer--top,.uv-drawer--bottom{right:0;left:0;height:min(var(--uv-drawer-size,24rem),100vh)}.uv-drawer--top{top:0;border-radius:0 0 var(--uv-radius-xl,1.25rem) var(--uv-radius-xl,1.25rem)}.uv-drawer--bottom{bottom:0;border-radius:var(--uv-radius-xl,1.25rem) var(--uv-radius-xl,1.25rem) 0 0}.uv-drawer__header{display:flex;justify-content:space-between;gap:1rem;align-items:flex-start;padding:1.1rem 1.25rem;border-bottom:1px solid var(--uv-color-border,#dbe3ef)}.uv-drawer__header h2,.uv-drawer__header p{margin:0}.uv-drawer__header h2{font-size:1.15rem}.uv-drawer__header p{margin-top:.25rem;color:var(--uv-color-text-muted,#64748b);font-size:.875rem}.uv-drawer__dismiss{display:grid;place-items:center;flex:0 0 auto;width:2rem;height:2rem;padding:0;border:0;border-radius:.45rem;background:transparent;color:inherit;font-size:1.4rem}.uv-drawer__dismiss:hover{background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-drawer__dismiss:focus-visible,.uv-drawer:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-drawer__body{flex:1;min-height:0;overflow:auto;padding:1.25rem}.uv-drawer__footer{display:flex;justify-content:flex-end;gap:.75rem;padding:1rem 1.25rem;border-top:1px solid var(--uv-color-border,#dbe3ef)}.uv-drawer-fade-enter-active,.uv-drawer-fade-leave-active{transition:opacity var(--uv-duration-normal,180ms)}.uv-drawer-fade-enter-active .uv-drawer,.uv-drawer-fade-leave-active .uv-drawer{transition:transform var(--uv-duration-normal,180ms)}.uv-drawer-fade-enter-from,.uv-drawer-fade-leave-to{opacity:0}.uv-drawer-fade-enter-from .uv-drawer--right,.uv-drawer-fade-leave-to .uv-drawer--right{transform:translateX(100%)}.uv-drawer-fade-enter-from .uv-drawer--left,.uv-drawer-fade-leave-to .uv-drawer--left{transform:translateX(-100%)}.uv-drawer-fade-enter-from .uv-drawer--top,.uv-drawer-fade-leave-to .uv-drawer--top{transform:translateY(-100%)}.uv-drawer-fade-enter-from .uv-drawer--bottom,.uv-drawer-fade-leave-to .uv-drawer--bottom{transform:translateY(100%)}
</style>
