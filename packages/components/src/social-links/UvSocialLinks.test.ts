import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSocialLinks from './UvSocialLinks.vue'

describe('UvSocialLinks', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSocialLinks, { props: { label: 'Social Links', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Social Links')
    expect(wrapper.find('[data-uv-component=UvSocialLinks]').exists()).toBe(true)
  })
})
