<script setup lang="ts">
import { computed, nextTick, ref, useId, watch } from 'vue'
import type { UvFileInfo, UvFileRejection, UvFileUploadChangeDetail } from './file-upload.types'

interface Props {
  modelValue?: File[]
  id?: string
  name?: string
  label?: string
  hint?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  required?: boolean
  maxSize?: number
  maxFiles?: number
  dropLabel?: string
  browseLabel?: string
  clearLabel?: string
  removeLabel?: string
  showFileList?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  id: '',
  name: '',
  label: 'Upload files',
  hint: '',
  accept: '',
  multiple: false,
  disabled: false,
  required: false,
  maxSize: 0,
  maxFiles: 0,
  dropLabel: 'Drag and drop files here',
  browseLabel: 'or choose files',
  clearLabel: 'Clear all files',
  removeLabel: 'Remove file',
  showFileList: true
})

const emit = defineEmits<{
  'update:modelValue': [files: File[]]
  change: [detail: UvFileUploadChangeDetail]
  reject: [rejections: UvFileRejection[]]
  clear: []
}>()

const generatedId = useId()
const inputId = computed(() => props.id || `uv-file-upload-${generatedId}`)
const hintId = computed(() => `${inputId.value}-hint`)
const statusId = computed(() => `${inputId.value}-status`)
const errorId = computed(() => `${inputId.value}-errors`)
const input = ref<HTMLInputElement>()
const selectedFiles = ref<File[]>([...props.modelValue])
const rejections = ref<UvFileRejection[]>([])
const dragging = ref(false)
const describedBy = computed(() => [props.hint ? hintId.value : '', statusId.value, rejections.value.length ? errorId.value : ''].filter(Boolean).join(' '))
const statusText = computed(() => {
  if (!selectedFiles.value.length) return 'No files selected'
  return `${selectedFiles.value.length} file${selectedFiles.value.length === 1 ? '' : 's'} selected`
})

function fileInfo(file: File): UvFileInfo {
  return { name: file.name, size: file.size, type: file.type, lastModified: file.lastModified }
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function acceptsFile(file: File): boolean {
  if (!props.accept.trim()) return true
  const filename = file.name.toLocaleLowerCase()
  const type = file.type.toLocaleLowerCase()
  return props.accept.split(',').map((token) => token.trim().toLocaleLowerCase()).filter(Boolean).some((token) => {
    if (token.startsWith('.')) return filename.endsWith(token)
    if (token.endsWith('/*')) return type.startsWith(token.slice(0, -1))
    return type === token
  })
}

function validateFiles(files: File[]): { accepted: File[]; rejected: UvFileRejection[] } {
  const accepted: File[] = []
  const rejected: UvFileRejection[] = []
  const allowedCount = props.multiple ? (props.maxFiles > 0 ? props.maxFiles : Number.POSITIVE_INFINITY) : 1

  for (const file of files) {
    if (accepted.length >= allowedCount) {
      rejected.push({ file: fileInfo(file), reason: 'count', message: `${file.name} exceeds the allowed file count.` })
    } else if (!acceptsFile(file)) {
      rejected.push({ file: fileInfo(file), reason: 'type', message: `${file.name} is not an accepted file type.` })
    } else if (props.maxSize > 0 && file.size > props.maxSize) {
      rejected.push({ file: fileInfo(file), reason: 'size', message: `${file.name} exceeds the ${formatBytes(props.maxSize)} size limit.` })
    } else {
      accepted.push(file)
    }
  }
  return { accepted, rejected }
}

function syncNativeFiles(files: File[]): void {
  const element = input.value
  if (!element) return
  if (!files.length) {
    element.value = ''
    return
  }
  if (typeof DataTransfer === 'undefined') return
  try {
    const transfer = new DataTransfer()
    files.forEach((file) => transfer.items.add(file))
    element.files = transfer.files
  } catch {
    // Some browsers expose a read-only FileList. The emitted File[] remains authoritative.
  }
}

function commitFiles(files: File[]): void {
  const result = validateFiles(files)
  selectedFiles.value = result.accepted
  rejections.value = result.rejected
  syncNativeFiles(result.accepted)
  const detail = { files: [...result.accepted], fileInfo: result.accepted.map(fileInfo) }
  emit('update:modelValue', detail.files)
  emit('change', detail)
  if (result.rejected.length) emit('reject', result.rejected)
}

function onInputChange(event: Event): void {
  const target = event.target as HTMLInputElement
  commitFiles(Array.from(target.files ?? []))
}

function onDrop(event: DragEvent): void {
  event.preventDefault()
  dragging.value = false
  if (props.disabled) return
  commitFiles(Array.from(event.dataTransfer?.files ?? []))
}

function openPicker(): void {
  if (!props.disabled) input.value?.click()
}

function removeFile(index: number): void {
  const next = selectedFiles.value.filter((_, fileIndex) => fileIndex !== index)
  rejections.value = []
  selectedFiles.value = next
  syncNativeFiles(next)
  const detail: UvFileUploadChangeDetail = { files: [...next], fileInfo: next.map(fileInfo) }
  emit('update:modelValue', detail.files)
  emit('change', detail)
  if (!next.length && input.value) input.value.value = ''
}

function clearFiles(): void {
  selectedFiles.value = []
  rejections.value = []
  if (input.value) input.value.value = ''
  emit('update:modelValue', [])
  emit('change', { files: [], fileInfo: [] })
  emit('clear')
}

watch(() => props.modelValue, (files) => {
  selectedFiles.value = [...files]
  nextTick(() => syncNativeFiles(files))
}, { deep: true })
</script>

<template>
  <div class="uv-file-upload">
    <label v-if="label" class="uv-file-upload__label" :for="inputId">{{ label }} <span v-if="required" class="uv-file-upload__required" aria-hidden="true">*</span></label>
    <input
      ref="input"
      :id="inputId"
      class="uv-sr-only"
      type="file"
      :name="name || undefined"
      :accept="accept || undefined"
      :multiple="multiple"
      :disabled="disabled"
      :required="required && !selectedFiles.length"
      :aria-describedby="describedBy"
      @change="onInputChange"
    >
    <div
      class="uv-file-upload__dropzone"
      :class="{ 'uv-file-upload__dropzone--dragging': dragging, 'uv-file-upload__dropzone--disabled': disabled }"
      role="button"
      :tabindex="disabled ? -1 : 0"
      :aria-disabled="disabled"
      :aria-controls="inputId"
      @click="openPicker"
      @keydown.enter.prevent="openPicker"
      @keydown.space.prevent="openPicker"
      @dragenter.prevent="!disabled && (dragging = true)"
      @dragover.prevent="!disabled && (dragging = true)"
      @dragleave.prevent="dragging = false"
      @drop="onDrop"
    >
      <span class="uv-file-upload__icon" aria-hidden="true">⇧</span>
      <strong>{{ dropLabel }}</strong>
      <span>{{ browseLabel }}</span>
      <small v-if="accept">Accepted: {{ accept }}</small>
      <small v-if="maxSize > 0">Maximum size: {{ formatBytes(maxSize) }}</small>
    </div>
    <p v-if="hint" :id="hintId" class="uv-file-upload__hint">{{ hint }}</p>
    <p :id="statusId" class="uv-file-upload__status" aria-live="polite">{{ statusText }}</p>
    <ul v-if="rejections.length" :id="errorId" class="uv-file-upload__errors" role="alert">
      <li v-for="rejection in rejections" :key="`${rejection.file.name}-${rejection.reason}`">{{ rejection.message }}</li>
    </ul>
    <div v-if="showFileList && selectedFiles.length" class="uv-file-upload__files">
      <ul>
        <li v-for="(file, index) in selectedFiles" :key="`${file.name}-${file.lastModified}`">
          <span><strong>{{ file.name }}</strong><small>{{ formatBytes(file.size) }}</small></span>
          <button type="button" :aria-label="`${removeLabel}: ${file.name}`" @click="removeFile(index)">×</button>
        </li>
      </ul>
      <button type="button" class="uv-file-upload__clear" @click="clearFiles">{{ clearLabel }}</button>
    </div>
  </div>
</template>

<style>
@import '../shared.css';
.uv-file-upload{display:grid;gap:.55rem;font-family:var(--uv-font-sans,system-ui,sans-serif);color:var(--uv-color-text,#0f172a)}.uv-file-upload__label{font-size:.875rem;font-weight:650}.uv-file-upload__required{color:var(--uv-color-danger,#dc2626)}.uv-file-upload__dropzone{display:grid;justify-items:center;gap:.3rem;padding:1.5rem 1rem;border:2px dashed var(--uv-color-border-strong,#94a3b8);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface-subtle,#f8fafc);text-align:center;cursor:pointer;transition:border-color var(--uv-duration-fast,120ms),background var(--uv-duration-fast,120ms),box-shadow var(--uv-duration-fast,120ms)}.uv-file-upload__dropzone:hover,.uv-file-upload__dropzone--dragging{border-color:var(--uv-color-primary,#2563eb);background:color-mix(in srgb,var(--uv-color-primary,#2563eb) 7%,var(--uv-color-surface,#fff))}.uv-file-upload__dropzone:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-file-upload__dropzone--disabled{opacity:.55;cursor:not-allowed}.uv-file-upload__icon{display:grid;place-items:center;width:2.5rem;height:2.5rem;border-radius:999px;background:var(--uv-color-surface,#fff);color:var(--uv-color-primary,#2563eb);font-size:1.35rem;font-weight:800}.uv-file-upload__dropzone span,.uv-file-upload__dropzone small,.uv-file-upload__hint,.uv-file-upload__status{color:var(--uv-color-text-muted,#64748b);font-size:.8125rem}.uv-file-upload__hint,.uv-file-upload__status{margin:0}.uv-file-upload__errors{margin:0;padding-left:1.2rem;color:var(--uv-color-danger,#dc2626);font-size:.8125rem}.uv-file-upload__files{display:grid;gap:.5rem}.uv-file-upload__files ul{display:grid;gap:.4rem;margin:0;padding:0;list-style:none}.uv-file-upload__files li{display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:.65rem .75rem;border:1px solid var(--uv-color-border,#dbe3ef);border-radius:var(--uv-radius-md,.625rem);background:var(--uv-color-surface,#fff)}.uv-file-upload__files li>span{display:grid;min-width:0}.uv-file-upload__files strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uv-file-upload__files small{color:var(--uv-color-text-muted,#64748b)}.uv-file-upload__files button{border:0;border-radius:.4rem;background:transparent;color:inherit}.uv-file-upload__files button:hover{background:var(--uv-color-surface-subtle,#f1f5f9)}.uv-file-upload__files button:focus-visible{outline:0;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-file-upload__clear{justify-self:start;padding:.45rem .65rem!important;border:1px solid var(--uv-color-border-strong,#94a3b8)!important}
</style>
