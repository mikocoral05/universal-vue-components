import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvForumPost from './UvForumPost.vue'

describe('UvForumPost', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvForumPost, { props: { label: 'Forum Post', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Forum Post')
    expect(wrapper.find('[data-uv-component=UvForumPost]').exists()).toBe(true)
  })
})
