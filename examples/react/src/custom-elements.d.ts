import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'uv-button': ElementProps & { variant?: string; disabled?: boolean }
      'uv-input': ElementProps & { label?: string; value?: string }
      'uv-alert': ElementProps & { tone?: string; title?: string }
      'uv-divider': ElementProps & { label?: string; orientation?: string; decorative?: boolean }
      'uv-skeleton': ElementProps & { variant?: string; width?: string; height?: string; lines?: string }
      'uv-slider': ElementProps & { label?: string; 'model-value'?: string; 'value-suffix'?: string; 'show-value'?: boolean }
      'uv-popover': ElementProps & { 'trigger-label'?: string; placement?: string }
      'uv-dropdown-menu': ElementProps & { label?: string; placement?: string }
    }
  }
}

export {}
