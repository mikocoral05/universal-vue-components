import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRingChart from './UvRingChart.vue'

describe('UvRingChart', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRingChart, { props: { label: 'Ring Chart', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Ring Chart')
    expect(wrapper.find('[data-uv-component=UvRingChart]').exists()).toBe(true)
  })
})
