export type UvTransferListId = string | number
export interface UvTransferListItem { id: UvTransferListId; label: string; description?: string; disabled?: boolean }
export interface UvTransferListDetail { value: UvTransferListId[]; moved: UvTransferListId[]; direction: 'to-target' | 'to-source' }
