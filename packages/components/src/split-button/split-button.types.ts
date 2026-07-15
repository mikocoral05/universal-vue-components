export type UvSplitButtonId = string | number
export interface UvSplitButtonItem { id: UvSplitButtonId; label: string; disabled?: boolean }
export interface UvSplitButtonSelectDetail { id: UvSplitButtonId; item: UvSplitButtonItem }
