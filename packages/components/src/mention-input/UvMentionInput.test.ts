import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMentionInput from './UvMentionInput.vue'

describe('UvMentionInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMentionInput, { props: { label: 'Mention Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Mention Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
