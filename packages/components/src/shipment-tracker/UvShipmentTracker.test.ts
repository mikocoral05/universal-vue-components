import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvShipmentTracker from './UvShipmentTracker.vue'

describe('UvShipmentTracker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvShipmentTracker, { props: { label: 'Shipment Tracker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Shipment Tracker')
    expect(wrapper.find('[data-uv-component=UvShipmentTracker]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
