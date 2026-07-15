import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFocusRing from './UvFocusRing.vue'

describe('UvFocusRing', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFocusRing, { props: { label: 'Focus Ring', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Focus Ring')
    expect(wrapper.find('[data-uv-component=UvFocusRing]').exists()).toBe(true)
  })
})
