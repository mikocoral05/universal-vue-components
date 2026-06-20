export type ClassValue = string | false | null | undefined
export const cx = (...values: ClassValue[]) => values.filter(Boolean).join(' ')
export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'
export const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))
export function defineElementOnce(tagName: string, constructor: CustomElementConstructor): void {
  if (typeof customElements !== 'undefined' && !customElements.get(tagName)) customElements.define(tagName, constructor)
}
export function normalizeBoolean(value: unknown): boolean {
  return value === '' || value === true || value === 'true' || value === 1 || value === '1'
}
