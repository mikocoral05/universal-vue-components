import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDonutChart from './UvDonutChart.vue'

describe('UvDonutChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDonutChart, { props: { label: 'Donut Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Donut Chart')
    expect(wrapper.find('[data-uv-component=UvDonutChart]').exists()).toBe(true)
  })
})
