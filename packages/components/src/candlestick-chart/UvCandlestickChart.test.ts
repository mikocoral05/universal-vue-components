import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCandlestickChart from './UvCandlestickChart.vue'

describe('UvCandlestickChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCandlestickChart, { props: { label: 'Candlestick Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Candlestick Chart')
    expect(wrapper.find('[data-uv-component=UvCandlestickChart]').exists()).toBe(true)
  })
})
