import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvErrorSummary from './UvErrorSummary.vue'

describe('UvErrorSummary', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvErrorSummary, { props: { label: 'Error Summary', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Error Summary')
    expect(wrapper.find('[data-uv-component=UvErrorSummary]').exists()).toBe(true)
  })
})
