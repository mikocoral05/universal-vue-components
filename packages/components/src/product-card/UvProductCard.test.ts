import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProductCard from './UvProductCard.vue'

describe('UvProductCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProductCard, { props: { label: 'Product Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Product Card')
    expect(wrapper.find('[data-uv-component=UvProductCard]').exists()).toBe(true)
  })
})
