import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvChatBubble from './UvChatBubble.vue'

describe('UvChatBubble', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvChatBubble, { props: { label: 'Chat Bubble', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Chat Bubble')
    expect(wrapper.find('[data-uv-component=UvChatBubble]').exists()).toBe(true)
  })
})
