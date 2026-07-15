import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvChatComposer from './UvChatComposer.vue'

describe('UvChatComposer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvChatComposer, { props: { label: 'Chat Composer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Chat Composer')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
