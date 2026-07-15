import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSubnav from './UvSubnav.vue'

describe('UvSubnav', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSubnav, { props: { label: 'Subnav', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Subnav')
    expect(wrapper.find('[data-uv-component=UvSubnav]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
