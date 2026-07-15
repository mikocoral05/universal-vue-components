import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInboxItem from './UvInboxItem.vue'

describe('UvInboxItem', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInboxItem, { props: { label: 'Inbox Item', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Inbox Item')
    expect(wrapper.find('[data-uv-component=UvInboxItem]').exists()).toBe(true)
  })
})
