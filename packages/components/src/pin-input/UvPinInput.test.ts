import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPinInput from './UvPinInput.vue'

describe('UvPinInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPinInput, { props: { label: 'Pin Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Pin Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
