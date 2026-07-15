import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvOrderConfirmation from './UvOrderConfirmation.vue'

describe('UvOrderConfirmation', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvOrderConfirmation, { props: { label: 'Order Confirmation', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Order Confirmation')
    expect(wrapper.find('[data-uv-component=UvOrderConfirmation]').exists()).toBe(true)
  })
})
