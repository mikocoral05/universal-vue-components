import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAreaChart from './UvAreaChart.vue'

describe('UvAreaChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAreaChart, { props: { label: 'Area Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Area Chart')
    expect(wrapper.find('[data-uv-component=UvAreaChart]').exists()).toBe(true)
  })
})
