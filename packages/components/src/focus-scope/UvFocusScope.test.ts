import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFocusScope from './UvFocusScope.vue'

describe('UvFocusScope', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFocusScope, { props: { label: 'Focus Scope', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Focus Scope')
    expect(wrapper.find('[data-uv-component=UvFocusScope]').exists()).toBe(true)
  })
})
