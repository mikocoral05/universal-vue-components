import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRadarChart from './UvRadarChart.vue'

describe('UvRadarChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRadarChart, { props: { label: 'Radar Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Radar Chart')
    expect(wrapper.find('[data-uv-component=UvRadarChart]').exists()).toBe(true)
  })
})
