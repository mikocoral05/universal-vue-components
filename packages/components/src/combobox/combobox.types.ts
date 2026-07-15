export type UvComboboxValue = string | number

export interface UvComboboxOption {
  label: string
  value: UvComboboxValue
  disabled?: boolean
  description?: string
}

export interface UvComboboxChangeDetail {
  value: UvComboboxValue | null
  option: UvComboboxOption | null
}
