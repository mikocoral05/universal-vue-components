import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvThreshold from './UvThreshold.vue'

describe('UvThreshold', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvThreshold, { props: { label: 'Threshold', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Threshold')
    expect(wrapper.find('[data-uv-component=UvThreshold]').exists()).toBe(true)
  })
})
