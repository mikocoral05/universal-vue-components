export type UvNavigationMenuId = string | number
export interface UvNavigationMenuItem { id: UvNavigationMenuId; label: string; href?: string; disabled?: boolean; children?: UvNavigationMenuItem[] }
export interface UvNavigationMenuDetail { id: UvNavigationMenuId; item: UvNavigationMenuItem }
