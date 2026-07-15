import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBanner from './UvBanner.vue'

describe('UvBanner', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBanner, { props: { label: 'Banner', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Banner')
    expect(wrapper.find('[data-uv-component=UvBanner]').exists()).toBe(true)
  })
})
