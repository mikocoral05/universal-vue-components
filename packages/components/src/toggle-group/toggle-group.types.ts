export type UvToggleGroupValue = string | number
export interface UvToggleGroupOption { label: string; value: UvToggleGroupValue; disabled?: boolean }
export interface UvToggleGroupDetail { value: UvToggleGroupValue | UvToggleGroupValue[]; option: UvToggleGroupOption }
