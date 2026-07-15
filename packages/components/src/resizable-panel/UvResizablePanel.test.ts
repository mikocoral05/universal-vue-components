import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvResizablePanel from './UvResizablePanel.vue'

describe('UvResizablePanel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvResizablePanel, { props: { label: 'Resizable Panel', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Resizable Panel')
    expect(wrapper.find('[data-uv-component=UvResizablePanel]').exists()).toBe(true)
  })
})
