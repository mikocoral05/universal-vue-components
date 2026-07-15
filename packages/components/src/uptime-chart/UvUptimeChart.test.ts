import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUptimeChart from './UvUptimeChart.vue'

describe('UvUptimeChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUptimeChart, { props: { label: 'Uptime Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Uptime Chart')
    expect(wrapper.find('[data-uv-component=UvUptimeChart]').exists()).toBe(true)
  })
})
