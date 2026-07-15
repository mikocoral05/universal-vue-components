import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSortControl from './UvSortControl.vue'

describe('UvSortControl', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSortControl, { props: { label: 'Sort Control', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Sort Control')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
