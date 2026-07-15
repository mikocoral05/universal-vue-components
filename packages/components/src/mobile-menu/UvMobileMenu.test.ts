import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMobileMenu from './UvMobileMenu.vue'

describe('UvMobileMenu', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMobileMenu, { props: { label: 'Mobile Menu', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Mobile Menu')
    expect(wrapper.find('[data-uv-component=UvMobileMenu]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
