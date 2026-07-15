import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAccessibilityPanel from './UvAccessibilityPanel.vue'

describe('UvAccessibilityPanel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAccessibilityPanel, { props: { label: 'Accessibility Panel', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Accessibility Panel')
    expect(wrapper.find('[data-uv-component=UvAccessibilityPanel]').exists()).toBe(true)
  })
})
