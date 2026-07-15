import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvScatterPlot from './UvScatterPlot.vue'

describe('UvScatterPlot', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvScatterPlot, { props: { label: 'Scatter Plot', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Scatter Plot')
    expect(wrapper.find('[data-uv-component=UvScatterPlot]').exists()).toBe(true)
  })
})
