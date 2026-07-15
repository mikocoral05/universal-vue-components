import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvComment from './UvComment.vue'

describe('UvComment', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvComment, { props: { label: 'Comment', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Comment')
    expect(wrapper.find('[data-uv-component=UvComment]').exists()).toBe(true)
  })
})
