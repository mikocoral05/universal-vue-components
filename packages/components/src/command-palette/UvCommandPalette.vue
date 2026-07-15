<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import type { UvCommandItem, UvCommandPaletteMode, UvCommandSelectDetail } from './command-palette.types'

interface Props {
  modelValue?: boolean
  commands?: UvCommandItem[]
  commandsJson?: string
  mode?: UvCommandPaletteMode
  triggerLabel?: string
  title?: string
  placeholder?: string
  emptyText?: string
  closeOnSelect?: boolean
  hotkey?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false, commands: () => [], commandsJson: '', mode: 'dialog', triggerLabel: 'Open command palette',
  title: 'Command palette', placeholder: 'Search commands…', emptyText: 'No commands found.', closeOnSelect: true,
  hotkey: true, disabled: false
})
const emit = defineEmits<{
  'update:modelValue': [open: boolean]
  open: []
  close: []
  search: [query: string]
  select: [detail: UvCommandSelectDetail]
}>()

function parseCommands(value: string): UvCommandItem[] {
  if (!value) return []
  try {
    const parsed: unknown = JSON.parse(value)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is UvCommandItem => Boolean(item && typeof item === 'object' && 'id' in item && typeof (item as UvCommandItem).label === 'string'))
  } catch { return [] }
}

const normalizedCommands = computed(() => props.commands.length ? props.commands : parseCommands(props.commandsJson))
const openState = ref(props.modelValue)
const query = ref('')
const activeIndex = ref(-1)
const input = ref<HTMLInputElement>()
const panel = ref<HTMLElement>()
const previousFocus = ref<HTMLElement | null>(null)
const generatedId = useId()
const listboxId = `uv-command-palette-${generatedId}-listbox`
const isOpen = computed(() => props.mode === 'inline' || openState.value)
const filtered = computed(() => {
  const needle = query.value.trim().toLocaleLowerCase()
  if (!needle) return normalizedCommands.value
  return normalizedCommands.value.filter((command) => [command.label, command.description, command.group, ...(command.keywords ?? [])].filter(Boolean).join(' ').toLocaleLowerCase().includes(needle))
})
const activeDescendant = computed(() => activeIndex.value >= 0 ? `${listboxId}-option-${activeIndex.value}` : undefined)

watch(() => props.modelValue, (value) => { openState.value = value })
watch(filtered, (commands) => { activeIndex.value = firstEnabled(commands) })

function firstEnabled(commands = filtered.value): number { return commands.findIndex((command) => !command.disabled) }
function setOpen(value: boolean): void {
  if (props.mode === 'inline' || (props.disabled && value) || openState.value === value) return
  openState.value = value
  emit('update:modelValue', value)
  if (value) emit('open')
  else emit('close')
  if (value) {
    activeIndex.value = firstEnabled()
    previousFocus.value = globalThis.document?.activeElement as HTMLElement | null
    nextTick(() => input.value?.focus())
  } else {
    query.value = ''
    activeIndex.value = firstEnabled(normalizedCommands.value)
    nextTick(() => previousFocus.value?.focus())
  }
}
function onInput(event: Event): void {
  query.value = (event.target as HTMLInputElement).value
  emit('search', query.value)
}
function move(direction: 1 | -1): void {
  if (!filtered.value.length) return
  let index = activeIndex.value
  for (let count = 0; count < filtered.value.length; count += 1) {
    index = (index + direction + filtered.value.length) % filtered.value.length
    if (!filtered.value[index]?.disabled) { activeIndex.value = index; break }
  }
}
function choose(command: UvCommandItem, index: number): void {
  if (command.disabled) return
  emit('select', { id: command.id, index, command })
  if (props.closeOnSelect) setOpen(false)
}
function onInputKeydown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown') { event.preventDefault(); move(1) }
  else if (event.key === 'ArrowUp') { event.preventDefault(); move(-1) }
  else if (event.key === 'Enter' && activeIndex.value >= 0) { event.preventDefault(); choose(filtered.value[activeIndex.value]!, activeIndex.value) }
  else if (event.key === 'Escape') { event.preventDefault(); setOpen(false) }
}
function onPanelKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') { event.preventDefault(); setOpen(false); return }
  if (event.key !== 'Tab' || props.mode !== 'dialog') return
  const focusable = Array.from(panel.value?.querySelectorAll<HTMLElement>('input,button:not([disabled]),[href],[tabindex]:not([tabindex="-1"])') ?? [])
  if (!focusable.length) return
  const first = focusable[0]!, last = focusable[focusable.length - 1]!
  if (event.shiftKey && globalThis.document?.activeElement === first) { event.preventDefault(); last.focus() }
  else if (!event.shiftKey && globalThis.document?.activeElement === last) { event.preventDefault(); first.focus() }
}
function onDocumentKeydown(event: KeyboardEvent): void {
  if (!props.hotkey || props.mode !== 'dialog' || props.disabled) return
  if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === 'k') { event.preventDefault(); setOpen(!openState.value) }
}
onMounted(() => {
  activeIndex.value = firstEnabled()
  globalThis.document?.addEventListener('keydown', onDocumentKeydown)
})
onBeforeUnmount(() => globalThis.document?.removeEventListener('keydown', onDocumentKeydown))
</script>

<template>
  <div class="uv-command-palette">
    <button v-if="mode === 'dialog'" type="button" class="uv-command-palette__trigger" :disabled="disabled" aria-haspopup="dialog" :aria-expanded="openState" @click="setOpen(true)">
      <slot name="trigger">{{ triggerLabel }} <kbd v-if="hotkey">Ctrl K</kbd></slot>
    </button>
    <div
      v-if="isOpen"
      class="uv-command-palette__overlay"
      :class="{ 'uv-command-palette__overlay--inline': mode === 'inline' }"
      @mousedown.self="setOpen(false)"
    >
      <section
        ref="panel"
        class="uv-command-palette__panel"
        :role="mode === 'dialog' ? 'dialog' : 'region'"
        :aria-modal="mode === 'dialog' ? 'true' : undefined"
        :aria-label="title"
        @keydown="onPanelKeydown"
      >
        <header class="uv-command-palette__header">
          <strong>{{ title }}</strong>
          <button v-if="mode === 'dialog'" type="button" class="uv-command-palette__close" aria-label="Close command palette" @click="setOpen(false)">×</button>
        </header>
        <div class="uv-command-palette__search">
          <span aria-hidden="true">⌕</span>
          <input
            ref="input"
            role="combobox"
            autocomplete="off"
            :placeholder="placeholder"
            :aria-label="title"
            :value="query"
            :aria-controls="listboxId"
            :aria-expanded="true"
            aria-autocomplete="list"
            :aria-activedescendant="activeDescendant"
            @input="onInput"
            @keydown="onInputKeydown"
          >
        </div>
        <div :id="listboxId" class="uv-command-palette__list" role="listbox" :aria-label="title">
          <button
            v-for="(command,index) in filtered"
            :id="`${listboxId}-option-${index}`"
            :key="String(command.id)"
            type="button"
            class="uv-command-palette__option"
            :class="{ 'uv-command-palette__option--active': index === activeIndex }"
            role="option"
            :aria-selected="index === activeIndex"
            :disabled="command.disabled"
            @mouseenter="activeIndex = index"
            @click="choose(command,index)"
          >
            <span class="uv-command-palette__copy">
              <small v-if="command.group">{{ command.group }}</small>
              <span>{{ command.label }}</span>
              <small v-if="command.description">{{ command.description }}</small>
            </span>
            <kbd v-if="command.shortcut">{{ command.shortcut }}</kbd>
          </button>
          <p v-if="!filtered.length" class="uv-command-palette__empty" role="status">{{ emptyText }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.uv-command-palette{color:var(--uv-color-text,#0f172a);font:inherit}.uv-command-palette__trigger{display:inline-flex;align-items:center;gap:.75rem;padding:.65rem .9rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff);color:inherit;font:inherit;cursor:pointer}.uv-command-palette kbd{padding:.12rem .35rem;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:.3rem;background:var(--uv-color-subtle,#f1f5f9);font:600 .72rem/1.2 ui-monospace,monospace}.uv-command-palette__overlay{position:fixed;z-index:1000;inset:0;display:grid;place-items:start center;padding:12vh 1rem;background:rgb(15 23 42/.55)}.uv-command-palette__overlay--inline{position:static;display:block;padding:0;background:transparent}.uv-command-palette__panel{width:min(38rem,100%);overflow:hidden;border:1px solid var(--uv-color-border,#cbd5e1);border-radius:calc(var(--uv-radius-md,.625rem) + .25rem);background:var(--uv-color-surface,#fff);box-shadow:0 20px 55px rgb(15 23 42/.22)}.uv-command-palette__overlay--inline .uv-command-palette__panel{box-shadow:none}.uv-command-palette__header{display:flex;align-items:center;justify-content:space-between;padding:.8rem 1rem;border-bottom:1px solid var(--uv-color-border,#e2e8f0)}.uv-command-palette__close{border:0;background:transparent;color:inherit;font-size:1.25rem;cursor:pointer}.uv-command-palette__search{display:flex;align-items:center;gap:.55rem;padding:.75rem 1rem;border-bottom:1px solid var(--uv-color-border,#e2e8f0)}.uv-command-palette__search input{width:100%;border:0;outline:0;background:transparent;color:inherit;font:inherit}.uv-command-palette__list{display:grid;gap:.25rem;max-height:19rem;overflow:auto;padding:.5rem}.uv-command-palette__option{display:flex;align-items:center;justify-content:space-between;gap:1rem;width:100%;padding:.65rem .75rem;border:0;border-radius:.5rem;background:transparent;color:inherit;text-align:left;font:inherit;cursor:pointer}.uv-command-palette__option--active,.uv-command-palette__option:hover{background:var(--uv-color-subtle,#eff6ff)}.uv-command-palette__option:disabled{opacity:.5;cursor:not-allowed}.uv-command-palette__copy{display:grid;gap:.12rem}.uv-command-palette__copy>span{font-weight:650}.uv-command-palette__copy small{color:var(--uv-color-muted,#64748b)}.uv-command-palette__empty{margin:0;padding:1.25rem;text-align:center;color:var(--uv-color-muted,#64748b)}
</style>
