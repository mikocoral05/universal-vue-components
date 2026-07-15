import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMapLegend from './UvMapLegend.vue'

describe('UvMapLegend', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMapLegend, { props: { label: 'Map Legend', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Map Legend')
    expect(wrapper.find('[data-uv-component=UvMapLegend]').exists()).toBe(true)
  })
})
