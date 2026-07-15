import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPaymentCard from './UvPaymentCard.vue'

describe('UvPaymentCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPaymentCard, { props: { label: 'Payment Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Payment Card')
    expect(wrapper.find('[data-uv-component=UvPaymentCard]').exists()).toBe(true)
  })
})
