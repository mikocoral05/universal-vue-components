import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMeter from './UvMeter.vue'

describe('UvMeter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMeter, { props: { label: 'Meter', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Meter')
    expect(wrapper.find('[data-uv-component=UvMeter]').exists()).toBe(true)
  })
})
