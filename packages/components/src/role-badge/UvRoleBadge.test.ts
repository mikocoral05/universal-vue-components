import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRoleBadge from './UvRoleBadge.vue'

describe('UvRoleBadge', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRoleBadge, { props: { label: 'Role Badge', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Role Badge')
    expect(wrapper.find('[data-uv-component=UvRoleBadge]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
