import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvForumThread from './UvForumThread.vue'

describe('UvForumThread', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvForumThread, { props: { label: 'Forum Thread', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Forum Thread')
    expect(wrapper.find('[data-uv-component=UvForumThread]').exists()).toBe(true)
  })
})
