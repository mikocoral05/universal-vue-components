import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSchedule from './UvSchedule.vue'

describe('UvSchedule', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSchedule, { props: { label: 'Schedule', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Schedule')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
