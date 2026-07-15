import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCalendarHeader from './UvCalendarHeader.vue'

describe('UvCalendarHeader', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCalendarHeader, { props: { label: 'Calendar Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Calendar Header')
    expect(wrapper.find('[data-uv-component=UvCalendarHeader]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
