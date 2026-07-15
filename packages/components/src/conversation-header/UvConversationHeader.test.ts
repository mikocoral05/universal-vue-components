import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvConversationHeader from './UvConversationHeader.vue'

describe('UvConversationHeader', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvConversationHeader, { props: { label: 'Conversation Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Conversation Header')
    expect(wrapper.find('[data-uv-component=UvConversationHeader]').exists()).toBe(true)
  })
})
