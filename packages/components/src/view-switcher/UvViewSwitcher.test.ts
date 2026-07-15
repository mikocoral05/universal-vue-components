import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvViewSwitcher from './UvViewSwitcher.vue'

describe('UvViewSwitcher', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvViewSwitcher, { props: { label: 'View Switcher', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('View Switcher')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
