import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBarChart from './UvBarChart.vue'

describe('UvBarChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBarChart, { props: { label: 'Bar Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Bar Chart')
    expect(wrapper.find('[data-uv-component=UvBarChart]').exists()).toBe(true)
  })
})
