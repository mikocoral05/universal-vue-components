export type UvTableAlign = 'left' | 'center' | 'right'
export type UvTableSortDirection = 'asc' | 'desc' | null
export type UvTableRow = Record<string, unknown>

export interface UvTableColumn {
  key: string
  label: string
  sortable?: boolean
  align?: UvTableAlign
  width?: string
}

export interface UvTableSortDetail {
  key: string | null
  direction: UvTableSortDirection
}

export interface UvTableRowClickDetail {
  row: UvTableRow
  rowIndex: number
  key: string | number
}

export interface UvTableSelectionDetail {
  selectedKeys: Array<string | number>
  selectedRows: UvTableRow[]
}
