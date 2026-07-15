import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDashboardGrid from './UvDashboardGrid.vue'

describe('UvDashboardGrid', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDashboardGrid, { props: { label: 'Dashboard Grid', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Dashboard Grid')
    expect(wrapper.find('[data-uv-component=UvDashboardGrid]').exists()).toBe(true)
  })
})
