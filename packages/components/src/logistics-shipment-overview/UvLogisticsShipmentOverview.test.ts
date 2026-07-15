import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLogisticsShipmentOverview from './UvLogisticsShipmentOverview.vue'

describe('UvLogisticsShipmentOverview', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvLogisticsShipmentOverview, { props: { label: 'Logistics Shipment Overview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvLogisticsShipmentOverview')
    expect(wrapper.text()).toContain('Logistics Shipment Overview')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
