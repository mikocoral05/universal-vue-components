import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProfileHeader from './UvProfileHeader.vue'

describe('UvProfileHeader', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProfileHeader, { props: { label: 'Profile Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Profile Header')
    expect(wrapper.find('[data-uv-component=UvProfileHeader]').exists()).toBe(true)
  })
})
