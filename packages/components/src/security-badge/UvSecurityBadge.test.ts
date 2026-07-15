import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSecurityBadge from './UvSecurityBadge.vue'

describe('UvSecurityBadge', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSecurityBadge, { props: { label: 'Security Badge', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Security Badge')
    expect(wrapper.find('[data-uv-component=UvSecurityBadge]').exists()).toBe(true)
  })
})
