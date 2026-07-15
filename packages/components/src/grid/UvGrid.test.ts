import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvGrid from './UvGrid.vue'

describe('UvGrid', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvGrid, { props: { label: 'Grid', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Grid')
    expect(wrapper.find('[data-uv-component=UvGrid]').exists()).toBe(true)
  })
})
