export type UvGeneratedId = string | number
export type UvGeneratedModelValue = string | number | boolean | null | UvGeneratedId[]
export type UvGeneratedTone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type UvGeneratedOrientation = 'horizontal' | 'vertical'

export interface UvGeneratedItem {
  id: UvGeneratedId
  label: string
  description?: string
  value?: UvGeneratedId
  href?: string
  disabled?: boolean
  meta?: string
}

export interface UvGeneratedChangeDetail {
  value: UvGeneratedModelValue
  item?: UvGeneratedItem
  source: 'pointer' | 'keyboard' | 'input' | 'programmatic'
}

export function parseGeneratedArray<T>(value: string): T[] {
  if (!value.trim()) return []
  try {
    const parsed: unknown = JSON.parse(value)
    return Array.isArray(parsed) ? parsed as T[] : []
  } catch {
    return []
  }
}

export function normalizeGeneratedItems(
  items: UvGeneratedItem[] | undefined,
  itemsJson: string,
  fallback: UvGeneratedItem[] = []
): UvGeneratedItem[] {
  if (items?.length) return items
  const parsed = parseGeneratedArray<UvGeneratedItem>(itemsJson)
  return parsed.length ? parsed : fallback
}

export function normalizeGeneratedValues(values: number[] | undefined, valuesJson: string): number[] {
  if (values?.length) return values.filter((value) => Number.isFinite(value))
  return parseGeneratedArray<unknown>(valuesJson).map(Number).filter(Number.isFinite)
}
