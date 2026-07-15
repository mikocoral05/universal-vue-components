export type UvTimelineOrientation = 'vertical' | 'horizontal'
export type UvTimelineStatus = 'default' | 'info' | 'success' | 'warning' | 'danger'
export type UvTimelineId = string | number

export interface UvTimelineItem {
  id: UvTimelineId
  title: string
  description?: string
  time?: string
  datetime?: string
  status?: UvTimelineStatus
  current?: boolean
  href?: string
}

export interface UvTimelineItemDetail {
  id: UvTimelineId
  index: number
  item: UvTimelineItem
}
