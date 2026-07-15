import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvGanttChart from './UvGanttChart.vue'

describe('UvGanttChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvGanttChart, { props: { label: 'Gantt Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Gantt Chart')
    expect(wrapper.find('[data-uv-component=UvGanttChart]').exists()).toBe(true)
  })
})
