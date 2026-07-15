import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFunnelChart from './UvFunnelChart.vue'

describe('UvFunnelChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFunnelChart, { props: { label: 'Funnel Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Funnel Chart')
    expect(wrapper.find('[data-uv-component=UvFunnelChart]').exists()).toBe(true)
  })
})
