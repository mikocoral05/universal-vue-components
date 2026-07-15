import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMapControls from './UvMapControls.vue'

describe('UvMapControls', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMapControls, { props: { label: 'Map Controls', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Map Controls')
    expect(wrapper.find('[data-uv-component=UvMapControls]').exists()).toBe(true)
  })
})
