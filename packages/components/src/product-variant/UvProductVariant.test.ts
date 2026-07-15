import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProductVariant from './UvProductVariant.vue'

describe('UvProductVariant', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProductVariant, { props: { label: 'Product Variant', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Product Variant')
    expect(wrapper.find('[data-uv-component=UvProductVariant]').exists()).toBe(true)
  })
})
