import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUserMenu from './UvUserMenu.vue'

describe('UvUserMenu', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUserMenu, { props: { label: 'User Menu', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('User Menu')
    expect(wrapper.find('[data-uv-component=UvUserMenu]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
