<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import type { UvDropdownPlacement } from './dropdown-menu.types'

interface Props {
  modelValue?: boolean
  label?: string
  placement?: UvDropdownPlacement
  disabled?: boolean
  closeOnSelect?: boolean
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: 'Menu',
  placement: 'bottom-start',
  disabled: false,
  closeOnSelect: true,
  ariaLabel: 'Actions'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  open: []
  close: []
  select: [event: Event]
}>()

const isOpen = ref(props.modelValue)
const root = ref<HTMLElement>()
const trigger = ref<HTMLButtonElement>()
const menu = ref<HTMLElement>()
const menuId = `uv-dropdown-${useId()}`

function setOpen(value: boolean) {
  if (props.disabled && value) return
  if (value === isOpen.value) return
  isOpen.value = value
  emit('update:modelValue', value)
  if (value) emit('open')
  else emit('close')
}
function close({ restoreFocus = false } = {}) {
  setOpen(false)
  if (restoreFocus) nextTick(() => trigger.value?.focus())
}
function toggle() { setOpen(!isOpen.value) }

function menuItems(): HTMLElement[] {
  const local = menu.value
    ? [...menu.value.querySelectorAll<HTMLElement>('[role="menuitem"],button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')]
    : []
  if (local.length) return local.filter((item) => !item.hasAttribute('disabled') && item.getAttribute('aria-disabled') !== 'true')

  const rootNode = root.value?.getRootNode()
  if (rootNode instanceof ShadowRoot) {
    return [...rootNode.host.querySelectorAll<HTMLElement>('[role="menuitem"],button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')]
      .filter((item) => item !== trigger.value && !item.hasAttribute('disabled') && item.getAttribute('aria-disabled') !== 'true')
  }
  return []
}
async function focusItem(position: 'first' | 'last') {
  await nextTick()
  const items = menuItems()
  const target = position === 'first' ? items[0] : items.at(-1)
  target?.focus()
}
async function openAndFocus(position: 'first' | 'last') {
  setOpen(true)
  await focusItem(position)
}
function onTriggerKey(event: KeyboardEvent) {
  if (event.key === 'ArrowDown') { event.preventDefault(); openAndFocus('first') }
  else if (event.key === 'ArrowUp') { event.preventDefault(); openAndFocus('last') }
}
function onMenuKey(event: KeyboardEvent) {
  const items = menuItems()
  if (!items.length) return
  const current = items.indexOf(document.activeElement as HTMLElement)
  let next = current
  if (event.key === 'ArrowDown') next = (current + 1 + items.length) % items.length
  else if (event.key === 'ArrowUp') next = (current - 1 + items.length) % items.length
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = items.length - 1
  else if (event.key === 'Tab') { close(); return }
  else return
  event.preventDefault()
  items[next]?.focus()
}
function onMenuClick(event: Event) {
  const path = event.composedPath() as EventTarget[]
  const selected = path.find((target) => target instanceof HTMLElement && target.matches('[role="menuitem"],button,a[href]'))
  if (!selected) return
  emit('select', event)
  if (props.closeOnSelect) close({ restoreFocus: true })
}
function onDocumentPointer(event: PointerEvent) {
  const path = event.composedPath()
  if (isOpen.value && root.value && !path.includes(root.value)) close()
}
function onDocumentKey(event: KeyboardEvent) {
  if (!isOpen.value || event.key !== 'Escape') return
  event.preventDefault()
  close({ restoreFocus: true })
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
  <span ref="root" class="uv-dropdown" :class="`uv-dropdown--${placement}`">
    <button
      ref="trigger"
      class="uv-dropdown__trigger"
      type="button"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
      :aria-controls="menuId"
      :disabled="disabled"
      @click="toggle"
      @keydown="onTriggerKey"
    >
      <slot name="trigger">{{ label }}</slot>
      <span class="uv-dropdown__chevron" aria-hidden="true">⌄</span>
    </button>
    <Transition name="uv-dropdown">
      <div
        v-if="isOpen"
        :id="menuId"
        ref="menu"
        class="uv-dropdown__menu"
        role="menu"
        :aria-label="ariaLabel"
        @keydown="onMenuKey"
        @click="onMenuClick"
      >
        <slot />
      </div>
    </Transition>
  </span>
</template>

<style>
.uv-dropdown{position:relative;display:inline-flex;font-family:var(--uv-font-sans,system-ui,sans-serif)}
.uv-dropdown__trigger{display:inline-flex;align-items:center;justify-content:center;gap:.45rem;min-height:2.5rem;padding:.6rem .85rem;border:1px solid var(--uv-color-border-strong,#94a3b8);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff);color:var(--uv-color-text,#0f172a);font:inherit;font-weight:700;cursor:pointer}
.uv-dropdown__trigger:hover:not(:disabled){background:var(--uv-color-surface-muted,#f8fafc)}.uv-dropdown__trigger:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-dropdown__trigger:disabled{opacity:.55;cursor:not-allowed}
.uv-dropdown__chevron{font-size:.8rem;transition:transform var(--uv-duration-fast,120ms)}.uv-dropdown__trigger[aria-expanded="true"] .uv-dropdown__chevron{transform:rotate(180deg)}
.uv-dropdown__menu{position:absolute;z-index:60;display:grid;min-width:13rem;padding:.35rem;border:1px solid var(--uv-color-border,#dbe3ef);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface,#fff);color:var(--uv-color-text,#0f172a);box-shadow:var(--uv-shadow-md,0 12px 32px rgb(15 23 42/.18))}
.uv-dropdown--bottom-start .uv-dropdown__menu{top:calc(100% + .45rem);left:0}.uv-dropdown--bottom-end .uv-dropdown__menu{top:calc(100% + .45rem);right:0}.uv-dropdown--top-start .uv-dropdown__menu{bottom:calc(100% + .45rem);left:0}.uv-dropdown--top-end .uv-dropdown__menu{right:0;bottom:calc(100% + .45rem)}
.uv-dropdown__menu button,.uv-dropdown__menu a,.uv-dropdown__menu [role="menuitem"],::slotted(button),::slotted(a),::slotted([role="menuitem"]){display:flex;width:100%;align-items:center;gap:.55rem;padding:.6rem .7rem;border:0;border-radius:.5rem;background:transparent;color:inherit;font:inherit;text-align:left;text-decoration:none;cursor:pointer}
.uv-dropdown__menu button:hover,.uv-dropdown__menu button:focus-visible,.uv-dropdown__menu a:hover,.uv-dropdown__menu a:focus-visible,.uv-dropdown__menu [role="menuitem"]:hover,.uv-dropdown__menu [role="menuitem"]:focus-visible,::slotted(button:hover),::slotted(button:focus-visible),::slotted(a:hover),::slotted(a:focus-visible),::slotted([role="menuitem"]:hover),::slotted([role="menuitem"]:focus-visible){outline:0;background:var(--uv-color-surface-muted,#f1f5f9)}
.uv-dropdown-enter-active,.uv-dropdown-leave-active{transition:opacity var(--uv-duration-fast,120ms),transform var(--uv-duration-fast,120ms)}.uv-dropdown-enter-from,.uv-dropdown-leave-to{opacity:0;transform:translateY(-.25rem)}
</style>
