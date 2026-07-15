import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvEmailInput from './UvEmailInput.vue'

describe('UvEmailInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvEmailInput, { props: { label: 'Email Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Email Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
