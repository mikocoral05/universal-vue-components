import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMetric from './UvMetric.vue'

describe('UvMetric', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMetric, { props: { label: 'Metric', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Metric')
    expect(wrapper.find('[data-uv-component=UvMetric]').exists()).toBe(true)
  })
})
