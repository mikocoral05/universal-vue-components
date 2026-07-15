import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvGauge from './UvGauge.vue'

describe('UvGauge', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvGauge, { props: { label: 'Gauge', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Gauge')
    expect(wrapper.find('[data-uv-component=UvGauge]').exists()).toBe(true)
  })
})
