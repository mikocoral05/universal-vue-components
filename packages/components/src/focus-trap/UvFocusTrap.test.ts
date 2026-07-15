import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFocusTrap from './UvFocusTrap.vue'

describe('UvFocusTrap', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFocusTrap, { props: { label: 'Focus Trap', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Focus Trap')
    expect(wrapper.find('[data-uv-component=UvFocusTrap]').exists()).toBe(true)
  })
})
