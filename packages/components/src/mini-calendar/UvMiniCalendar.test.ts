import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMiniCalendar from './UvMiniCalendar.vue'

describe('UvMiniCalendar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMiniCalendar, { props: { label: 'Mini Calendar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Mini Calendar')
    expect(wrapper.find('[data-uv-component=UvMiniCalendar]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
