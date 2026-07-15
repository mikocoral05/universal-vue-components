export type UvStepperValue = string | number
export type UvStepperOrientation = 'horizontal' | 'vertical'
export type UvStepperStatus = 'complete' | 'current' | 'upcoming' | 'error'

export interface UvStepperStep {
  id: UvStepperValue
  label: string
  description?: string
  disabled?: boolean
  status?: UvStepperStatus
}

export interface UvStepperChangeDetail {
  value: UvStepperValue
  index: number
  step: UvStepperStep
}
