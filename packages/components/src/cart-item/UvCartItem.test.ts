import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCartItem from './UvCartItem.vue'

describe('UvCartItem', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCartItem, { props: { label: 'Cart Item', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Cart Item')
    expect(wrapper.find('[data-uv-component=UvCartItem]').exists()).toBe(true)
  })
})
