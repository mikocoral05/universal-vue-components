import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvWeekPicker from './UvWeekPicker.vue'

describe('UvWeekPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvWeekPicker, { props: { label: 'Week Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Week Picker')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
