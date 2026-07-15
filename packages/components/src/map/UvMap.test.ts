import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMap from './UvMap.vue'

describe('UvMap', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMap, { props: { label: 'Map', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Map')
    expect(wrapper.find('[data-uv-component=UvMap]').exists()).toBe(true)
  })
})
