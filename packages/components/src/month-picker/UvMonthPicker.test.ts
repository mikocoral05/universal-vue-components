import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMonthPicker from './UvMonthPicker.vue'

describe('UvMonthPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMonthPicker, { props: { label: 'Month Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Month Picker')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
