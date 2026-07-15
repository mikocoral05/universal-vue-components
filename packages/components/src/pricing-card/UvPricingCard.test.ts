import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPricingCard from './UvPricingCard.vue'

describe('UvPricingCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPricingCard, { props: { label: 'Pricing Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Pricing Card')
    expect(wrapper.find('[data-uv-component=UvPricingCard]').exists()).toBe(true)
  })
})
