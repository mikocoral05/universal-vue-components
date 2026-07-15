import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCurrencyInput from './UvCurrencyInput.vue'

describe('UvCurrencyInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCurrencyInput, { props: { label: 'Currency Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Currency Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
