import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBranchSelector from './UvBranchSelector.vue'

describe('UvBranchSelector', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBranchSelector, { props: { label: 'Branch Selector', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Branch Selector')
    expect(wrapper.find('[data-uv-component=UvBranchSelector]').exists()).toBe(true)
  })
})
