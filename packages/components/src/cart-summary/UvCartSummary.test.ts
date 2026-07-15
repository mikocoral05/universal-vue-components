import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCartSummary from './UvCartSummary.vue'

describe('UvCartSummary', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCartSummary, { props: { label: 'Cart Summary', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Cart Summary')
    expect(wrapper.find('[data-uv-component=UvCartSummary]').exists()).toBe(true)
  })
})
