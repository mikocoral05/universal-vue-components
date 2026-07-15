<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type {
  UvTableColumn,
  UvTableRow,
  UvTableRowClickDetail,
  UvTableSelectionDetail,
  UvTableSortDetail,
  UvTableSortDirection
} from './table.types'

interface Props {
  columns?: UvTableColumn[]
  rows?: UvTableRow[]
  columnsJson?: string
  rowsJson?: string
  caption?: string
  captionHidden?: boolean
  rowKey?: string
  loading?: boolean
  loadingText?: string
  emptyText?: string
  responsive?: boolean
  sortable?: boolean
  selectable?: boolean
  selectedKeys?: Array<string | number>
  selectedKeysJson?: string
  sortKey?: string | null
  sortDirection?: UvTableSortDirection
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  rows: () => [],
  columnsJson: '',
  rowsJson: '',
  caption: '',
  captionHidden: false,
  rowKey: 'id',
  loading: false,
  loadingText: 'Loading rows',
  emptyText: 'No data available',
  responsive: true,
  sortable: true,
  selectable: false,
  selectedKeys: () => [],
  selectedKeysJson: '',
  sortKey: null,
  sortDirection: null
})

const emit = defineEmits<{
  'update:sortKey': [key: string | null]
  'update:sortDirection': [direction: UvTableSortDirection]
  'update:selectedKeys': [keys: Array<string | number>]
  'sort-change': [detail: UvTableSortDetail]
  'row-click': [detail: UvTableRowClickDetail]
  'selection-change': [detail: UvTableSelectionDetail]
}>()

function isColumn(value: unknown): value is UvTableColumn {
  if (!value || typeof value !== 'object') return false
  const column = value as Partial<UvTableColumn>
  return typeof column.key === 'string' && typeof column.label === 'string'
}

function isRow(value: unknown): value is UvTableRow {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function parseArray<T>(json: string, guard: (value: unknown) => value is T): T[] {
  if (!json) return []
  try {
    const parsed: unknown = JSON.parse(json)
    return Array.isArray(parsed) ? parsed.filter(guard) : []
  } catch {
    return []
  }
}

const normalizedColumns = computed(() => props.columns.length ? props.columns.filter(isColumn) : parseArray(props.columnsJson, isColumn))
const normalizedRows = computed(() => props.rows.length ? props.rows.filter(isRow) : parseArray(props.rowsJson, isRow))
const currentSortKey = ref<string | null>(props.sortKey)
const currentSortDirection = ref<UvTableSortDirection>(props.sortDirection)

function parseSelectedKeys(): Array<string | number> {
  if (props.selectedKeys.length) return props.selectedKeys
  if (!props.selectedKeysJson) return []
  try {
    const parsed: unknown = JSON.parse(props.selectedKeysJson)
    return Array.isArray(parsed) ? parsed.filter((value): value is string | number => typeof value === 'string' || typeof value === 'number') : []
  } catch {
    return []
  }
}

const selection = ref(new Set<string | number>(parseSelectedKeys()))

function rowIdentity(row: UvTableRow, index: number): string | number {
  const value = row[props.rowKey]
  return typeof value === 'string' || typeof value === 'number' ? value : index
}

function compareValues(left: unknown, right: unknown): number {
  if (left == null && right == null) return 0
  if (left == null) return -1
  if (right == null) return 1
  if (typeof left === 'number' && typeof right === 'number') return left - right
  return String(left).localeCompare(String(right), undefined, { numeric: true, sensitivity: 'base' })
}

const displayedRows = computed(() => {
  const entries = normalizedRows.value.map((row, originalIndex) => ({ row, originalIndex, key: rowIdentity(row, originalIndex) }))
  if (!currentSortKey.value || !currentSortDirection.value) return entries
  const direction = currentSortDirection.value === 'asc' ? 1 : -1
  const key = currentSortKey.value
  return [...entries].sort((left, right) => compareValues(left.row[key], right.row[key]) * direction)
})

const selectedRows = computed(() => normalizedRows.value.filter((row, index) => selection.value.has(rowIdentity(row, index))))
const allVisibleSelected = computed(() => displayedRows.value.length > 0 && displayedRows.value.every((entry) => selection.value.has(entry.key)))
const someVisibleSelected = computed(() => displayedRows.value.some((entry) => selection.value.has(entry.key)) && !allVisibleSelected.value)
const columnCount = computed(() => Math.max(1, normalizedColumns.value.length + (props.selectable ? 1 : 0)))

function sort(column: UvTableColumn): void {
  if (!props.sortable || !column.sortable) return
  let nextKey: string | null = column.key
  let nextDirection: UvTableSortDirection = 'asc'
  if (currentSortKey.value === column.key && currentSortDirection.value === 'asc') nextDirection = 'desc'
  else if (currentSortKey.value === column.key && currentSortDirection.value === 'desc') {
    nextKey = null
    nextDirection = null
  }
  currentSortKey.value = nextKey
  currentSortDirection.value = nextDirection
  emit('update:sortKey', nextKey)
  emit('update:sortDirection', nextDirection)
  emit('sort-change', { key: nextKey, direction: nextDirection })
}

function ariaSort(column: UvTableColumn): 'ascending' | 'descending' | 'none' | undefined {
  if (!props.sortable || !column.sortable) return undefined
  if (currentSortKey.value !== column.key || !currentSortDirection.value) return 'none'
  return currentSortDirection.value === 'asc' ? 'ascending' : 'descending'
}

function emitSelection(): void {
  const keys = [...selection.value]
  emit('update:selectedKeys', keys)
  emit('selection-change', { selectedKeys: keys, selectedRows: selectedRows.value })
}

function toggleRow(key: string | number): void {
  const next = new Set(selection.value)
  if (next.has(key)) next.delete(key)
  else next.add(key)
  selection.value = next
  emitSelection()
}

function toggleAll(): void {
  const next = new Set(selection.value)
  if (allVisibleSelected.value) displayedRows.value.forEach((entry) => next.delete(entry.key))
  else displayedRows.value.forEach((entry) => next.add(entry.key))
  selection.value = next
  emitSelection()
}

function onRowClick(entry: { row: UvTableRow; originalIndex: number; key: string | number }): void {
  emit('row-click', { row: entry.row, rowIndex: entry.originalIndex, key: entry.key })
}

function cellText(value: unknown): string {
  if (value == null) return ''
  if (typeof value === 'object') return JSON.stringify(value) ?? ''
  return String(value)
}

watch(() => props.sortKey, (value) => { currentSortKey.value = value })
watch(() => props.sortDirection, (value) => { currentSortDirection.value = value })
watch(() => [props.selectedKeys, props.selectedKeysJson] as const, () => {
  selection.value = new Set(parseSelectedKeys())
}, { deep: true })
</script>

<template>
  <div class="uv-table-wrapper" :class="{ 'uv-table-wrapper--responsive': responsive }">
    <table class="uv-table">
      <caption v-if="caption" :class="{ 'uv-sr-only': captionHidden }">{{ caption }}</caption>
      <thead>
        <tr>
          <th v-if="selectable" class="uv-table__select" scope="col">
            <input
              type="checkbox"
              aria-label="Select all rows"
              :checked="allVisibleSelected"
              :indeterminate="someVisibleSelected"
              :disabled="!displayedRows.length || loading"
              @change="toggleAll"
            >
          </th>
          <th
            v-for="column in normalizedColumns"
            :key="column.key"
            scope="col"
            :aria-sort="ariaSort(column)"
            :style="{ width: column.width, textAlign: column.align || 'left' }"
          >
            <button v-if="sortable && column.sortable" type="button" class="uv-table__sort" @click="sort(column)">
              <slot :name="`header-${column.key}`" :column="column">{{ column.label }}</slot>
              <span class="uv-table__sort-icon" aria-hidden="true">
                {{ currentSortKey === column.key ? (currentSortDirection === 'asc' ? '↑' : currentSortDirection === 'desc' ? '↓' : '↕') : '↕' }}
              </span>
            </button>
            <slot v-else :name="`header-${column.key}`" :column="column">{{ column.label }}</slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td :colspan="columnCount" class="uv-table__state" role="status"><slot name="loading">{{ loadingText }}</slot></td>
        </tr>
        <tr v-else-if="!displayedRows.length">
          <td :colspan="columnCount" class="uv-table__state"><slot name="empty">{{ emptyText }}</slot></td>
        </tr>
        <tr
          v-for="entry in displayedRows"
          v-else
          :key="entry.key"
          :class="{ 'uv-table__row--selected': selection.has(entry.key) }"
          @click="onRowClick(entry)"
        >
          <td v-if="selectable" class="uv-table__select">
            <input
              type="checkbox"
              :aria-label="`Select row ${entry.originalIndex + 1}`"
              :checked="selection.has(entry.key)"
              @click.stop
              @change="toggleRow(entry.key)"
            >
          </td>
          <td
            v-for="column in normalizedColumns"
            :key="column.key"
            :data-label="column.label"
            :style="{ textAlign: column.align || 'left' }"
          >
            <slot
              :name="`cell-${column.key}`"
              :value="entry.row[column.key]"
              :row="entry.row"
              :row-index="entry.originalIndex"
              :column="column"
            >{{ cellText(entry.row[column.key]) }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
@import '../shared.css';
.uv-table-wrapper{max-width:100%;font-family:var(--uv-font-sans,system-ui,sans-serif);color:var(--uv-color-text,#0f172a)}.uv-table-wrapper--responsive{overflow-x:auto}.uv-table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--uv-color-border,#dbe3ef);border-radius:var(--uv-radius-lg,.875rem);background:var(--uv-color-surface,#fff);font-size:.9rem}.uv-table caption{padding:.75rem;text-align:left;font-size:1rem;font-weight:700}.uv-table th,.uv-table td{padding:.75rem .85rem;border-bottom:1px solid var(--uv-color-border,#dbe3ef);vertical-align:middle}.uv-table th{background:var(--uv-color-surface-subtle,#f8fafc);font-size:.8rem;font-weight:750;letter-spacing:.02em;text-transform:uppercase}.uv-table thead th:first-child{border-top-left-radius:var(--uv-radius-lg,.875rem)}.uv-table thead th:last-child{border-top-right-radius:var(--uv-radius-lg,.875rem)}.uv-table tbody tr:last-child td{border-bottom:0}.uv-table tbody tr:hover:not(:has(.uv-table__state)){background:color-mix(in srgb,var(--uv-color-primary,#2563eb) 4%,transparent)}.uv-table__row--selected{background:color-mix(in srgb,var(--uv-color-primary,#2563eb) 8%,transparent)}.uv-table__sort{display:flex;width:100%;justify-content:space-between;gap:.5rem;align-items:center;padding:0;border:0;background:transparent;color:inherit;font:inherit;font-weight:inherit;letter-spacing:inherit;text-align:inherit;text-transform:inherit}.uv-table__sort:focus-visible{outline:0;border-radius:.25rem;box-shadow:var(--uv-focus-ring,0 0 0 3px rgb(37 99 235/.25))}.uv-table__sort-icon{color:var(--uv-color-text-muted,#64748b);font-size:.85rem}.uv-table__select{width:3rem;text-align:center!important}.uv-table input[type="checkbox"]{width:1rem;height:1rem;accent-color:var(--uv-color-primary,#2563eb)}.uv-table__state{padding:2rem!important;color:var(--uv-color-text-muted,#64748b);text-align:center}
@media(max-width:640px){.uv-table-wrapper--responsive .uv-table{min-width:40rem}}
</style>
