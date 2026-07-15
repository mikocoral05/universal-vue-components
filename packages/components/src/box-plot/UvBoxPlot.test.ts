import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBoxPlot from './UvBoxPlot.vue'

describe('UvBoxPlot', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBoxPlot, { props: { label: 'Box Plot', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Box Plot')
    expect(wrapper.find('[data-uv-component=UvBoxPlot]').exists()).toBe(true)
  })
})
