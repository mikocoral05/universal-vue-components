import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLiveRegion from './UvLiveRegion.vue'

describe('UvLiveRegion', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLiveRegion, { props: { label: 'Live Region', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Live Region')
    expect(wrapper.find('[data-uv-component=UvLiveRegion]').exists()).toBe(true)
  })
})
