import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDeliveryEstimate from './UvDeliveryEstimate.vue'

describe('UvDeliveryEstimate', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDeliveryEstimate, { props: { label: 'Delivery Estimate', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Delivery Estimate')
    expect(wrapper.find('[data-uv-component=UvDeliveryEstimate]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
