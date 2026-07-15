import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRovingFocusGroup from './UvRovingFocusGroup.vue'

describe('UvRovingFocusGroup', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRovingFocusGroup, { props: { label: 'Roving Focus Group', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Roving Focus Group')
    expect(wrapper.find('[data-uv-component=UvRovingFocusGroup]').exists()).toBe(true)
  })
})
