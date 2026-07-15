import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDiscountBadge from './UvDiscountBadge.vue'

describe('UvDiscountBadge', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDiscountBadge, { props: { label: 'Discount Badge', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Discount Badge')
    expect(wrapper.find('[data-uv-component=UvDiscountBadge]').exists()).toBe(true)
  })
})
