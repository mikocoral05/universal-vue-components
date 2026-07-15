import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPullRequestCard from './UvPullRequestCard.vue'

describe('UvPullRequestCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPullRequestCard, { props: { label: 'Pull Request Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Pull Request Card')
    expect(wrapper.find('[data-uv-component=UvPullRequestCard]').exists()).toBe(true)
  })
})
