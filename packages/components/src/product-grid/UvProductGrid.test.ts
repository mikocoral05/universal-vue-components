import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProductGrid from './UvProductGrid.vue'

describe('UvProductGrid', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProductGrid, { props: { label: 'Product Grid', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Product Grid')
    expect(wrapper.find('[data-uv-component=UvProductGrid]').exists()).toBe(true)
  })
})
