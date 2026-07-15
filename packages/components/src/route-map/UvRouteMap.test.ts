import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRouteMap from './UvRouteMap.vue'

describe('UvRouteMap', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRouteMap, { props: { label: 'Route Map', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Route Map')
    expect(wrapper.find('[data-uv-component=UvRouteMap]').exists()).toBe(true)
  })
})
