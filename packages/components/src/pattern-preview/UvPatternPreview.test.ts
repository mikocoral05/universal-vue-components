import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPatternPreview from './UvPatternPreview.vue'

describe('UvPatternPreview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPatternPreview, { props: { label: 'Pattern Preview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Pattern Preview')
    expect(wrapper.find('[data-uv-component=UvPatternPreview]').exists()).toBe(true)
  })
})
