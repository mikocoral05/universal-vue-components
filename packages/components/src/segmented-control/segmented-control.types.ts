export type UvSegmentedValue = string | number
export interface UvSegmentedOption { label: string; value: UvSegmentedValue; disabled?: boolean; description?: string }
export interface UvSegmentedDetail { value: UvSegmentedValue; option: UvSegmentedOption }
