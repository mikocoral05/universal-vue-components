export type UvTagInputInvalidReason = 'empty' | 'duplicate' | 'maximum' | 'pattern'

export interface UvTagInputChangeDetail {
  values: string[]
}

export interface UvTagInputItemDetail {
  value: string
  index: number
}

export interface UvTagInputInvalidDetail {
  value: string
  reason: UvTagInputInvalidReason
}
