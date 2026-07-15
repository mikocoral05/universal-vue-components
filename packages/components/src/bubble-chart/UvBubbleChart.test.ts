import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBubbleChart from './UvBubbleChart.vue'

describe('UvBubbleChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBubbleChart, { props: { label: 'Bubble Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Bubble Chart')
    expect(wrapper.find('[data-uv-component=UvBubbleChart]').exists()).toBe(true)
  })
})
