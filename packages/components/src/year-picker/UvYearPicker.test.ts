import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvYearPicker from './UvYearPicker.vue'

describe('UvYearPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvYearPicker, { props: { label: 'Year Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Year Picker')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
