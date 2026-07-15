import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCrossTab from './UvCrossTab.vue'

describe('UvCrossTab', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCrossTab, { props: { label: 'Cross Tab', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Cross Tab')
    expect(wrapper.find('[data-uv-component=UvCrossTab]').exists()).toBe(true)
  })
})
