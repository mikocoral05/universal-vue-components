export type UvListboxValue = string | number
export interface UvListboxOption { label: string; value: UvListboxValue; disabled?: boolean; description?: string }
export interface UvListboxDetail { value: UvListboxValue | UvListboxValue[]; option: UvListboxOption }
