import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCheckoutSummary from './UvCheckoutSummary.vue'

describe('UvCheckoutSummary', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCheckoutSummary, { props: { label: 'Checkout Summary', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Checkout Summary')
    expect(wrapper.find('[data-uv-component=UvCheckoutSummary]').exists()).toBe(true)
  })
})
