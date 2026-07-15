import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHealthIndicator from './UvHealthIndicator.vue'

describe('UvHealthIndicator', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvHealthIndicator, { props: { label: 'Health Indicator', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Health Indicator')
    expect(wrapper.find('[data-uv-component=UvHealthIndicator]').exists()).toBe(true)
  })
})
