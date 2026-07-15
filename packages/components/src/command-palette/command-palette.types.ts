export type UvCommandPaletteMode = 'dialog' | 'inline'
export type UvCommandId = string | number

export interface UvCommandItem {
  id: UvCommandId
  label: string
  description?: string
  group?: string
  keywords?: string[]
  shortcut?: string
  disabled?: boolean
}

export interface UvCommandSelectDetail {
  id: UvCommandId
  index: number
  command: UvCommandItem
}
