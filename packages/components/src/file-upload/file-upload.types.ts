export type UvFileRejectionReason = 'type' | 'size' | 'count'

export interface UvFileInfo {
  name: string
  size: number
  type: string
  lastModified: number
}

export interface UvFileRejection {
  file: UvFileInfo
  reason: UvFileRejectionReason
  message: string
}

export interface UvFileUploadChangeDetail {
  files: File[]
  fileInfo: UvFileInfo[]
}
