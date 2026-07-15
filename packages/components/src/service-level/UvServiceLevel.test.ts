import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvServiceLevel from './UvServiceLevel.vue'

describe('UvServiceLevel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvServiceLevel, { props: { label: 'Service Level', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Service Level')
    expect(wrapper.find('[data-uv-component=UvServiceLevel]').exists()).toBe(true)
  })
})
