import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCalendarGrid from './UvCalendarGrid.vue'

describe('UvCalendarGrid', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCalendarGrid, { props: { label: 'Calendar Grid', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Calendar Grid')
    expect(wrapper.find('[data-uv-component=UvCalendarGrid]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
