import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTableSummary from './UvTableSummary.vue'

describe('UvTableSummary', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTableSummary, { props: { label: 'Table Summary', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Table Summary')
    expect(wrapper.find('[data-uv-component=UvTableSummary]').exists()).toBe(true)
  })
})
