import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHeatmap from './UvHeatmap.vue'

describe('UvHeatmap', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvHeatmap, { props: { label: 'Heatmap', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Heatmap')
    expect(wrapper.find('[data-uv-component=UvHeatmap]').exists()).toBe(true)
  })
})
