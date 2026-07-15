import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvShortcutList from './UvShortcutList.vue'

describe('UvShortcutList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvShortcutList, { props: { label: 'Shortcut List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Shortcut List')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
