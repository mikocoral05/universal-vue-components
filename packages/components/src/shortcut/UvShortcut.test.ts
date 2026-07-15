import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvShortcut from './UvShortcut.vue'

describe('UvShortcut', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvShortcut, { props: { label: 'Shortcut', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Shortcut')
    expect(wrapper.find('[data-uv-component=UvShortcut]').exists()).toBe(true)
  })
})
