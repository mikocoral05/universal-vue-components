import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTimeInput from './UvTimeInput.vue'

describe('UvTimeInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTimeInput, { props: { label: 'Time Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Time Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
