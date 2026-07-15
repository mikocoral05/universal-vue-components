import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFilterBar from './UvFilterBar.vue'

describe('UvFilterBar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFilterBar, { props: { label: 'Filter Bar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Filter Bar')
    expect(wrapper.find('[data-uv-component=UvFilterBar]').exists()).toBe(true)
  })
})
