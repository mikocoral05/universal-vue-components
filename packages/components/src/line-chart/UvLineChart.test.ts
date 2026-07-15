import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLineChart from './UvLineChart.vue'

describe('UvLineChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLineChart, { props: { label: 'Line Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Line Chart')
    expect(wrapper.find('[data-uv-component=UvLineChart]').exists()).toBe(true)
  })
})
