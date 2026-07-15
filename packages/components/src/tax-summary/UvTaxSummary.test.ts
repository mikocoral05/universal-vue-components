import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTaxSummary from './UvTaxSummary.vue'

describe('UvTaxSummary', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTaxSummary, { props: { label: 'Tax Summary', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Tax Summary')
    expect(wrapper.find('[data-uv-component=UvTaxSummary]').exists()).toBe(true)
  })
})
