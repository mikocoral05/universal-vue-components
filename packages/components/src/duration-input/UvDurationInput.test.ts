import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDurationInput from './UvDurationInput.vue'

describe('UvDurationInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDurationInput, { props: { label: 'Duration Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Duration Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
