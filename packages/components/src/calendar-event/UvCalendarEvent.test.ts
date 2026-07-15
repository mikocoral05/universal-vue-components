import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCalendarEvent from './UvCalendarEvent.vue'

describe('UvCalendarEvent', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCalendarEvent, { props: { label: 'Calendar Event', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Calendar Event')
    expect(wrapper.find('[data-uv-component=UvCalendarEvent]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
