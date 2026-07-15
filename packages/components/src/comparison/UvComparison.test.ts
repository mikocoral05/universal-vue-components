import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvComparison from './UvComparison.vue'

describe('UvComparison', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvComparison, { props: { label: 'Comparison', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Comparison')
    expect(wrapper.find('[data-uv-component=UvComparison]').exists()).toBe(true)
  })
})
