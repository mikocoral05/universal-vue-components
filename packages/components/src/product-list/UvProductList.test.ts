import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProductList from './UvProductList.vue'

describe('UvProductList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProductList, { props: { label: 'Product List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Product List')
    expect(wrapper.find('[data-uv-component=UvProductList]').exists()).toBe(true)
  })
})
