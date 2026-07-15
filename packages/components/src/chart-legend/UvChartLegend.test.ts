import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvChartLegend from './UvChartLegend.vue'

describe('UvChartLegend', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvChartLegend, { props: { label: 'Chart Legend', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Chart Legend')
    expect(wrapper.find('[data-uv-component=UvChartLegend]').exists()).toBe(true)
  })
})
