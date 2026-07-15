export type UvToastVariant = 'success' | 'info' | 'warning' | 'danger'
export type UvToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'inline'
export type UvToastDismissReason = 'manual' | 'timeout'

export interface UvToastItem {
  id: string | number
  title?: string
  message: string
  variant?: UvToastVariant
  duration?: number
  dismissible?: boolean
}

export interface UvToastDismissDetail {
  id: string | number
  item: UvToastItem
  reason: UvToastDismissReason
}
