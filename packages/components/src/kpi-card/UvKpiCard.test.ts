import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvKpiCard from './UvKpiCard.vue'

describe('UvKpiCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvKpiCard, { props: { label: 'Kpi Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Kpi Card')
    expect(wrapper.find('[data-uv-component=UvKpiCard]').exists()).toBe(true)
  })
})
