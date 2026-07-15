import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCart from './UvCart.vue'

describe('UvCart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCart, { props: { label: 'Cart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Cart')
    expect(wrapper.find('[data-uv-component=UvCart]').exists()).toBe(true)
  })
})
