import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMapMarker from './UvMapMarker.vue'

describe('UvMapMarker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMapMarker, { props: { label: 'Map Marker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Map Marker')
    expect(wrapper.find('[data-uv-component=UvMapMarker]').exists()).toBe(true)
  })
})
