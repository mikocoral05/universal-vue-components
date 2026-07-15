import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRecurringSchedule from './UvRecurringSchedule.vue'

describe('UvRecurringSchedule', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRecurringSchedule, { props: { label: 'Recurring Schedule', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Recurring Schedule')
    expect(wrapper.find('[data-uv-component=UvRecurringSchedule]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
