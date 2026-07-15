import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPanel from './UvPanel.vue'

describe('UvPanel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPanel, { props: { label: 'Panel', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Panel')
    expect(wrapper.find('[data-uv-component=UvPanel]').exists()).toBe(true)
  })
})
