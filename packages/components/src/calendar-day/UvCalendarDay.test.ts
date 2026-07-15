import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCalendarDay from './UvCalendarDay.vue'

describe('UvCalendarDay', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCalendarDay, { props: { label: 'Calendar Day', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Calendar Day')
    expect(wrapper.find('[data-uv-component=UvCalendarDay]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
