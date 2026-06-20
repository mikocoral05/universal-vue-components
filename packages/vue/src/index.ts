import type { App, Plugin } from 'vue'
import '@universal-vue/tokens/source.css'
import {
  UvAccordion, UvAlert, UvAvatar, UvBadge, UvBreadcrumb, UvButton, UvCard, UvCheckbox,
  UvDialog, UvDivider, UvDropdownMenu, UvIconButton, UvInput, UvPagination, UvPopover,
  UvProgress, UvRadio, UvSelect, UvSkeleton, UvSlider, UvSpinner, UvSwitch, UvTabs,
  UvTextarea, UvTooltip
} from '@universal-vue/components'

export * from '@universal-vue/components'

export const UniversalVue: Plugin = {
  install(app: App) {
    const components = {
      UvAccordion, UvAlert, UvAvatar, UvBadge, UvBreadcrumb, UvButton, UvCard, UvCheckbox,
      UvDialog, UvDivider, UvDropdownMenu, UvIconButton, UvInput, UvPagination, UvPopover,
      UvProgress, UvRadio, UvSelect, UvSkeleton, UvSlider, UvSpinner, UvSwitch, UvTabs,
      UvTextarea, UvTooltip
    }
    for (const [name, component] of Object.entries(components)) app.component(name, component)
  }
}

export default UniversalVue
