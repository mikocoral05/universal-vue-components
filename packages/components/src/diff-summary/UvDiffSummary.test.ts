import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDiffSummary from './UvDiffSummary.vue'

describe('UvDiffSummary', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDiffSummary, { props: { label: 'Diff Summary', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Diff Summary')
    expect(wrapper.find('[data-uv-component=UvDiffSummary]').exists()).toBe(true)
  })
})
