import type { DetailedHTMLProps, HTMLAttributes } from 'react'
declare module 'react' { namespace JSX { interface IntrinsicElements {
 'uv-button': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { variant?: string; disabled?: boolean }
 'uv-input': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { label?: string; value?: string }
 'uv-alert': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { tone?: string; title?: string }
} } }
export {}
