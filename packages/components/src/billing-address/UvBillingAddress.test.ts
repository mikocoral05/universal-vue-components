import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBillingAddress from './UvBillingAddress.vue'

describe('UvBillingAddress', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBillingAddress, { props: { label: 'Billing Address', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Billing Address')
    expect(wrapper.find('[data-uv-component=UvBillingAddress]').exists()).toBe(true)
  })
})
