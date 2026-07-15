import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName: `uv-${string}`]: ElementProps & { label?: string; title?: string; description?: string; value?: string; 'model-value'?: string | boolean; 'items-json'?: string; 'values-json'?: string; disabled?: boolean }
      'uv-button': ElementProps & { variant?: string; size?: string; disabled?: boolean }
      'uv-input': ElementProps & { label?: string; value?: string }
      'uv-alert': ElementProps & { tone?: string; title?: string }
      'uv-divider': ElementProps & { label?: string; orientation?: string; decorative?: boolean }
      'uv-skeleton': ElementProps & { variant?: string; width?: string; height?: string; lines?: string }
      'uv-slider': ElementProps & { label?: string; 'model-value'?: string; 'value-suffix'?: string; 'show-value'?: boolean }
      'uv-popover': ElementProps & { 'trigger-label'?: string; placement?: string }
      'uv-dropdown-menu': ElementProps & { label?: string; placement?: string }
      'uv-toast': ElementProps & { position?: string; 'items-json'?: string }
      'uv-drawer': ElementProps & { title?: string; description?: string; placement?: string; 'model-value'?: boolean }
      'uv-combobox': ElementProps & { label?: string; 'model-value'?: string; 'options-json'?: string }
      'uv-file-upload': ElementProps & { label?: string; accept?: string; multiple?: boolean }
      'uv-table': ElementProps & { caption?: string; 'columns-json'?: string; 'rows-json'?: string; selectable?: boolean }
      'uv-calendar': ElementProps & { 'model-value'?: string; locale?: string; min?: string; max?: string; 'disabled-dates-json'?: string }
      'uv-date-picker': ElementProps & { label?: string; 'model-value'?: string; locale?: string; min?: string; max?: string }
      'uv-number-input': ElementProps & { label?: string; 'model-value'?: string; min?: string; max?: string; step?: string }
      'uv-rating': ElementProps & { label?: string; 'model-value'?: string; max?: string; 'show-value'?: boolean; readonly?: boolean }
      'uv-tag-input': ElementProps & { label?: string; 'values-json'?: string; 'suggestions-json'?: string; 'max-tags'?: string }
      'uv-form-field': ElementProps & { label?: string; hint?: string; error?: string; 'for-id'?: string; required?: boolean }
      'uv-fieldset': ElementProps & { legend?: string; description?: string; error?: string; layout?: string; columns?: string; disabled?: boolean }
      'uv-stepper': ElementProps & { 'model-value'?: string; 'steps-json'?: string; orientation?: string; linear?: boolean }
      'uv-command-palette': ElementProps & { mode?: string; 'commands-json'?: string; 'trigger-label'?: string; hotkey?: boolean }
      'uv-empty-state': ElementProps & { title?: string; description?: string; tone?: string; compact?: boolean }
      'uv-toolbar': ElementProps & { label?: string; orientation?: string; loop?: boolean }
      'uv-sidebar': ElementProps & { label?: string; placement?: string; mode?: string; width?: string; 'model-value'?: boolean }
      'uv-tree-view': ElementProps & { label?: string; 'nodes-json'?: string; 'expanded-json'?: string; 'model-value'?: string }
      'uv-carousel': ElementProps & { label?: string; 'items-json'?: string; 'model-value'?: string; autoplay?: boolean; loop?: boolean }
      'uv-search-input': ElementProps & { label?: string; 'model-value'?: string; debounce?: string; loading?: boolean }
      'uv-password-input': ElementProps & { label?: string; 'model-value'?: string; 'show-strength'?: boolean }
      'uv-otp-input': ElementProps & { label?: string; 'model-value'?: string; length?: string; mode?: string }
      'uv-color-picker': ElementProps & { label?: string; 'model-value'?: string; 'swatches-json'?: string }
      'uv-range-slider': ElementProps & { label?: string; 'values-json'?: string; min?: string; max?: string }
      'uv-toggle': ElementProps & { label?: string; 'model-value'?: boolean | string; variant?: string }
      'uv-toggle-group': ElementProps & { label?: string; 'model-value'?: string; 'options-json'?: string; multiple?: boolean }
      'uv-segmented-control': ElementProps & { label?: string; 'model-value'?: string; 'options-json'?: string }
      'uv-button-group': ElementProps & { label?: string; orientation?: string; attached?: boolean }
      'uv-split-button': ElementProps & { label?: string; 'items-json'?: string; 'model-value'?: boolean }
      'uv-link': ElementProps & { href?: string; target?: string; external?: boolean; disabled?: boolean }
      'uv-skip-link': ElementProps & { href?: string; label?: string }
      'uv-navigation-menu': ElementProps & { label?: string; 'items-json'?: string; 'model-value'?: string; orientation?: string }
      'uv-menubar': ElementProps & { label?: string; 'items-json'?: string }
      'uv-bottom-navigation': ElementProps & { label?: string; 'items-json'?: string; 'model-value'?: string; fixed?: boolean }
      'uv-alert-dialog': ElementProps & { title: string; description?: string; 'model-value'?: boolean; danger?: boolean }
      'uv-hover-card': ElementProps & { 'model-value'?: boolean; placement?: string; 'open-delay'?: string }
      'uv-collapsible': ElementProps & { title?: string; 'model-value'?: boolean; lazy?: boolean }
      'uv-scroll-area': ElementProps & { label?: string; 'max-height'?: string; orientation?: string; shadow?: boolean }
      'uv-aspect-ratio': ElementProps & { ratio?: string; label?: string; 'max-width'?: string }
      'uv-description-list': ElementProps & { label?: string; 'items-json'?: string; layout?: string; bordered?: boolean; striped?: boolean }
      'uv-stat': ElementProps & { label: string; value: string; trend?: string; 'trend-direction'?: string; loading?: boolean }
      'uv-code-block': ElementProps & { code: string; language?: string; copyable?: boolean; 'line-numbers'?: boolean; 'highlight-lines'?: string }
      'uv-listbox': ElementProps & { label?: string; 'options-json'?: string; 'model-value'?: string; multiple?: boolean; searchable?: boolean }
      'uv-transfer-list': ElementProps & { 'items-json'?: string; 'values-json'?: string; 'source-label'?: string; 'target-label'?: string; searchable?: boolean }
      'uv-timeline': ElementProps & { label?: string; 'items-json'?: string; orientation?: string; ordered?: boolean; alternate?: boolean }
    }
  }
}

export {}
