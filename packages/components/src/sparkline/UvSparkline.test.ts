import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSparkline from './UvSparkline.vue'

describe('UvSparkline', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSparkline, { props: { label: 'Sparkline', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Sparkline')
    expect(wrapper.find('[data-uv-component=UvSparkline]').exists()).toBe(true)
  })
})
