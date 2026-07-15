import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMegaMenu from './UvMegaMenu.vue'

describe('UvMegaMenu', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMegaMenu, { props: { label: 'Mega Menu', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Mega Menu')
    expect(wrapper.find('[data-uv-component=UvMegaMenu]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
