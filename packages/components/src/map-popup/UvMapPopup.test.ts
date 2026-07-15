import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMapPopup from './UvMapPopup.vue'

describe('UvMapPopup', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMapPopup, { props: { label: 'Map Popup', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Map Popup')
    expect(wrapper.find('[data-uv-component=UvMapPopup]').exists()).toBe(true)
  })
})
