import type { App, Plugin } from 'vue'
import '@universal-vue/tokens/source.css'
import {
  UvAlert, UvBadge, UvButton, UvCheckbox, UvIconButton,
  UvInput, UvRadio, UvSpinner, UvSwitch, UvTextarea, UvSelect, UvCard, UvProgress, UvAvatar, UvAccordion, UvTabs, UvBreadcrumb, UvPagination, UvDialog, UvTooltip
} from '@universal-vue/components'

export * from '@universal-vue/components'

export const UniversalVue: Plugin = {
  install(app: App) {
    const components = { UvAlert, UvBadge, UvButton, UvCheckbox, UvIconButton, UvInput, UvRadio, UvSpinner, UvSwitch, UvTextarea, UvSelect, UvCard, UvProgress, UvAvatar, UvAccordion, UvTabs, UvBreadcrumb, UvPagination, UvDialog, UvTooltip }
    for (const [name, component] of Object.entries(components)) app.component(name, component)
  }
}
export default UniversalVue
