import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvResourceCalendar from './UvResourceCalendar.vue'

describe('UvResourceCalendar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvResourceCalendar, { props: { label: 'Resource Calendar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Resource Calendar')
    expect(wrapper.find('[data-uv-component=UvResourceCalendar]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
