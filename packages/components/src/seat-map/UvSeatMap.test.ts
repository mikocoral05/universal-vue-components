import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSeatMap from './UvSeatMap.vue'

describe('UvSeatMap', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSeatMap, { props: { label: 'Seat Map', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Seat Map')
    expect(wrapper.find('[data-uv-component=UvSeatMap]').exists()).toBe(true)
  })
})
