import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMetricGroup from './UvMetricGroup.vue'

describe('UvMetricGroup', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMetricGroup, { props: { label: 'Metric Group', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Metric Group')
    expect(wrapper.find('[data-uv-component=UvMetricGroup]').exists()).toBe(true)
  })
})
