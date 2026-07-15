import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTimePicker from './UvTimePicker.vue'

describe('UvTimePicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTimePicker, { props: { label: 'Time Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Time Picker')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
