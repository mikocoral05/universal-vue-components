export type UvMenubarId = string | number
export interface UvMenubarItem { id: UvMenubarId; label: string; disabled?: boolean; shortcut?: string; children?: UvMenubarItem[] }
export interface UvMenubarDetail { id: UvMenubarId; item: UvMenubarItem }
