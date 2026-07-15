import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPhoneInput from './UvPhoneInput.vue'

describe('UvPhoneInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPhoneInput, { props: { label: 'Phone Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Phone Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
