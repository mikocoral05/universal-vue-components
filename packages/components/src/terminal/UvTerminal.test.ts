import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTerminal from './UvTerminal.vue'

describe('UvTerminal', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTerminal, { props: { label: 'Terminal', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Terminal')
    expect(wrapper.find('[data-uv-component=UvTerminal]').exists()).toBe(true)
  })
})
