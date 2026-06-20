import { defineCustomElement } from 'vue'
import { defineElementOnce } from '@universal-vue/utilities'
import '@universal-vue/tokens/source.css'
import {
  UvAccordion,
  UvAlert,
  UvAvatar,
  UvBadge,
  UvBreadcrumb,
  UvButton,
  UvCard,
  UvCheckbox,
  UvDialog,
  UvDivider,
  UvDropdownMenu,
  UvIconButton,
  UvInput,
  UvPagination,
  UvPopover,
  UvProgress,
  UvRadio,
  UvSelect,
  UvSkeleton,
  UvSlider,
  UvSpinner,
  UvSwitch,
  UvTabs,
  UvTextarea,
  UvTooltip
} from '@universal-vue/components'

export type UniversalVueElementConstructor = CustomElementConstructor

export const UvButtonElement: UniversalVueElementConstructor = defineCustomElement(UvButton) as unknown as UniversalVueElementConstructor
export const UvIconButtonElement: UniversalVueElementConstructor = defineCustomElement(UvIconButton) as unknown as UniversalVueElementConstructor
export const UvInputElement: UniversalVueElementConstructor = defineCustomElement(UvInput) as unknown as UniversalVueElementConstructor
export const UvTextareaElement: UniversalVueElementConstructor = defineCustomElement(UvTextarea) as unknown as UniversalVueElementConstructor
export const UvCheckboxElement: UniversalVueElementConstructor = defineCustomElement(UvCheckbox) as unknown as UniversalVueElementConstructor
export const UvRadioElement: UniversalVueElementConstructor = defineCustomElement(UvRadio) as unknown as UniversalVueElementConstructor
export const UvSwitchElement: UniversalVueElementConstructor = defineCustomElement(UvSwitch) as unknown as UniversalVueElementConstructor
export const UvBadgeElement: UniversalVueElementConstructor = defineCustomElement(UvBadge) as unknown as UniversalVueElementConstructor
export const UvAlertElement: UniversalVueElementConstructor = defineCustomElement(UvAlert) as unknown as UniversalVueElementConstructor
export const UvSpinnerElement: UniversalVueElementConstructor = defineCustomElement(UvSpinner) as unknown as UniversalVueElementConstructor
export const UvSelectElement: UniversalVueElementConstructor = defineCustomElement(UvSelect) as unknown as UniversalVueElementConstructor
export const UvCardElement: UniversalVueElementConstructor = defineCustomElement(UvCard) as unknown as UniversalVueElementConstructor
export const UvProgressElement: UniversalVueElementConstructor = defineCustomElement(UvProgress) as unknown as UniversalVueElementConstructor
export const UvAvatarElement: UniversalVueElementConstructor = defineCustomElement(UvAvatar) as unknown as UniversalVueElementConstructor
export const UvAccordionElement: UniversalVueElementConstructor = defineCustomElement(UvAccordion) as unknown as UniversalVueElementConstructor
export const UvTabsElement: UniversalVueElementConstructor = defineCustomElement(UvTabs) as unknown as UniversalVueElementConstructor
export const UvBreadcrumbElement: UniversalVueElementConstructor = defineCustomElement(UvBreadcrumb) as unknown as UniversalVueElementConstructor
export const UvPaginationElement: UniversalVueElementConstructor = defineCustomElement(UvPagination) as unknown as UniversalVueElementConstructor
export const UvDialogElement: UniversalVueElementConstructor = defineCustomElement(UvDialog) as unknown as UniversalVueElementConstructor
export const UvTooltipElement: UniversalVueElementConstructor = defineCustomElement(UvTooltip) as unknown as UniversalVueElementConstructor
export const UvDividerElement: UniversalVueElementConstructor = defineCustomElement(UvDivider) as unknown as UniversalVueElementConstructor
export const UvSkeletonElement: UniversalVueElementConstructor = defineCustomElement(UvSkeleton) as unknown as UniversalVueElementConstructor
export const UvSliderElement: UniversalVueElementConstructor = defineCustomElement(UvSlider) as unknown as UniversalVueElementConstructor
export const UvPopoverElement: UniversalVueElementConstructor = defineCustomElement(UvPopover) as unknown as UniversalVueElementConstructor
export const UvDropdownMenuElement: UniversalVueElementConstructor = defineCustomElement(UvDropdownMenu) as unknown as UniversalVueElementConstructor

export const elementDefinitions: ReadonlyArray<readonly [string, UniversalVueElementConstructor]> = [
  ['uv-button', UvButtonElement],
  ['uv-icon-button', UvIconButtonElement],
  ['uv-input', UvInputElement],
  ['uv-textarea', UvTextareaElement],
  ['uv-checkbox', UvCheckboxElement],
  ['uv-radio', UvRadioElement],
  ['uv-switch', UvSwitchElement],
  ['uv-badge', UvBadgeElement],
  ['uv-alert', UvAlertElement],
  ['uv-spinner', UvSpinnerElement],
  ['uv-select', UvSelectElement],
  ['uv-card', UvCardElement],
  ['uv-progress', UvProgressElement],
  ['uv-avatar', UvAvatarElement],
  ['uv-accordion', UvAccordionElement],
  ['uv-tabs', UvTabsElement],
  ['uv-breadcrumb', UvBreadcrumbElement],
  ['uv-pagination', UvPaginationElement],
  ['uv-dialog', UvDialogElement],
  ['uv-tooltip', UvTooltipElement],
  ['uv-divider', UvDividerElement],
  ['uv-skeleton', UvSkeletonElement],
  ['uv-slider', UvSliderElement],
  ['uv-popover', UvPopoverElement],
  ['uv-dropdown-menu', UvDropdownMenuElement]
]

export function registerAll(): void {
  for (const [tag, element] of elementDefinitions) defineElementOnce(tag, element)
}

export function registerElement(tagName: string): void {
  const found = elementDefinitions.find(([tag]) => tag === tagName)
  if (!found) throw new Error(`Unknown Universal Vue element: ${tagName}`)
  defineElementOnce(found[0], found[1])
}
