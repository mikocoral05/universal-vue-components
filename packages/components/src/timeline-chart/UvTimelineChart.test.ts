import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTimelineChart from './UvTimelineChart.vue'

describe('UvTimelineChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTimelineChart, { props: { label: 'Timeline Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Timeline Chart')
    expect(wrapper.find('[data-uv-component=UvTimelineChart]').exists()).toBe(true)
  })
})
