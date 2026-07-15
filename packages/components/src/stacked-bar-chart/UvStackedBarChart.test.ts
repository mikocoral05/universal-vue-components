import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStackedBarChart from './UvStackedBarChart.vue'

describe('UvStackedBarChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvStackedBarChart, { props: { label: 'Stacked Bar Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Stacked Bar Chart')
    expect(wrapper.find('[data-uv-component=UvStackedBarChart]').exists()).toBe(true)
  })
})
