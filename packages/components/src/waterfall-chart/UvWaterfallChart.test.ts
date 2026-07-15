import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvWaterfallChart from './UvWaterfallChart.vue'

describe('UvWaterfallChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvWaterfallChart, { props: { label: 'Waterfall Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Waterfall Chart')
    expect(wrapper.find('[data-uv-component=UvWaterfallChart]').exists()).toBe(true)
  })
})
