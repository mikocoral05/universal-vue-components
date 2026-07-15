import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSplitLayout from './UvSplitLayout.vue'

describe('UvSplitLayout', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSplitLayout, { props: { label: 'Split Layout', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Split Layout')
    expect(wrapper.find('[data-uv-component=UvSplitLayout]').exists()).toBe(true)
  })
})
