import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTrend from './UvTrend.vue'

describe('UvTrend', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTrend, { props: { label: 'Trend', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Trend')
    expect(wrapper.find('[data-uv-component=UvTrend]').exists()).toBe(true)
  })
})
