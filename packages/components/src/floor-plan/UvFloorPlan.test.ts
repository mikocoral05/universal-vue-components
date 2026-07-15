import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFloorPlan from './UvFloorPlan.vue'

describe('UvFloorPlan', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFloorPlan, { props: { label: 'Floor Plan', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Floor Plan')
    expect(wrapper.find('[data-uv-component=UvFloorPlan]').exists()).toBe(true)
  })
})
