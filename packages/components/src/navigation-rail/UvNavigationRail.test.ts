import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvNavigationRail from './UvNavigationRail.vue'

describe('UvNavigationRail', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvNavigationRail, { props: { label: 'Navigation Rail', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Navigation Rail')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
