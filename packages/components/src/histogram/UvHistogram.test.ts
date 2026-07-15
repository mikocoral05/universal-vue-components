import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHistogram from './UvHistogram.vue'

describe('UvHistogram', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvHistogram, { props: { label: 'Histogram', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Histogram')
    expect(wrapper.find('[data-uv-component=UvHistogram]').exists()).toBe(true)
  })
})
