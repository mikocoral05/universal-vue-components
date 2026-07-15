import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPieChart from './UvPieChart.vue'

describe('UvPieChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPieChart, { props: { label: 'Pie Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Pie Chart')
    expect(wrapper.find('[data-uv-component=UvPieChart]').exists()).toBe(true)
  })
})
