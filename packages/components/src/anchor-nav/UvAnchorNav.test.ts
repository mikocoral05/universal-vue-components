import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAnchorNav from './UvAnchorNav.vue'

describe('UvAnchorNav', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAnchorNav, { props: { label: 'Anchor Nav', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Anchor Nav')
    expect(wrapper.find('[data-uv-component=UvAnchorNav]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
