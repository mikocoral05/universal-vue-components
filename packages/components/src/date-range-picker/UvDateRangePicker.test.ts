import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDateRangePicker from './UvDateRangePicker.vue'

describe('UvDateRangePicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDateRangePicker, { props: { label: 'Date Range Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Date Range Picker')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
