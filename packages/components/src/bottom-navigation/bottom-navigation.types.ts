export type UvBottomNavigationId = string | number
export interface UvBottomNavigationItem { id: UvBottomNavigationId; label: string; href?: string; icon?: string; disabled?: boolean; badge?: string | number }
export interface UvBottomNavigationDetail { id: UvBottomNavigationId; item: UvBottomNavigationItem }
