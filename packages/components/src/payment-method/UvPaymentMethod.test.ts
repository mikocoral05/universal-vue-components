import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPaymentMethod from './UvPaymentMethod.vue'

describe('UvPaymentMethod', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPaymentMethod, { props: { label: 'Payment Method', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Payment Method')
    expect(wrapper.find('[data-uv-component=UvPaymentMethod]').exists()).toBe(true)
  })
})
