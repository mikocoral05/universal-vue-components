import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvModerationBadge from './UvModerationBadge.vue'

describe('UvModerationBadge', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvModerationBadge, { props: { label: 'Moderation Badge', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Moderation Badge')
    expect(wrapper.find('[data-uv-component=UvModerationBadge]').exists()).toBe(true)
  })
})
