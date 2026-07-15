import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAvatarGroup from './UvAvatarGroup.vue'

describe('UvAvatarGroup', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAvatarGroup, { props: { label: 'Avatar Group', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Avatar Group')
    expect(wrapper.find('[data-uv-component=UvAvatarGroup]').exists()).toBe(true)
  })
})
