import { defineComponent, h, type PropType } from 'vue'

export type UvIconName =
  | 'check'
  | 'close'
  | 'info'
  | 'warning'
  | 'error'
  | 'search'
  | 'chevronDown'
  | 'arrowRight'
  | 'copy'
  | 'sun'
  | 'moon'

export const iconPaths: Readonly<Record<UvIconName, string>> = {
  check: 'M20 6 9 17l-5-5',
  close: 'M18 6 6 18M6 6l12 12',
  info: 'M12 16v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  warning: 'M12 9v4m0 4h.01M10.3 3.6 2.2 17.6A2 2 0 0 0 3.9 20h16.2a2 2 0 0 0 1.7-2.4L13.7 3.6a2 2 0 0 0-3.4 0Z',
  error: 'M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  search: 'm21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z',
  chevronDown: 'm6 9 6 6 6-6',
  arrowRight: 'M5 12h14m-6-6 6 6-6 6',
  copy: 'M8 8h11v11H8zM5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1',
  sun: 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.42-1.42M4.92 19.08l1.42-1.42m0-11.32L4.92 4.92m14.16 14.16-1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  moon: 'M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z'
}

export const UvIcon = defineComponent({
  name: 'UvIcon',
  props: {
    name: { type: String as PropType<UvIconName>, required: true },
    size: { type: [String, Number], default: 20 },
    label: { type: String, default: undefined },
    strokeWidth: { type: Number, default: 2 }
  },
  setup(props) {
    return () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
      'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round',
      width: props.size, height: props.size, role: props.label ? 'img' : undefined,
      'aria-label': props.label, 'aria-hidden': props.label ? undefined : 'true', focusable: 'false'
    }, [h('path', { d: iconPaths[props.name] })])
  }
})
