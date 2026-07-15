import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBio from './UvBio.vue'

describe('UvBio', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBio, { props: { label: 'Bio', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Bio')
    expect(wrapper.find('[data-uv-component=UvBio]').exists()).toBe(true)
  })
})
