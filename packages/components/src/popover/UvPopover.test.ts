import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPopover from './UvPopover.vue'

describe('UvPopover', () => {
  it('opens from its accessible trigger', async () => {
    const wrapper = mount(UvPopover, { props: { modelValue: false, triggerLabel: 'More information' }, slots: { default: 'Popover content' } })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
    expect(wrapper.get('button').attributes('aria-haspopup')).toBe('dialog')
  })

  it('renders dialog content when controlled open', () => {
    const wrapper = mount(UvPopover, { props: { modelValue: true }, slots: { default: 'Popover content' } })
    expect(wrapper.get('[role="dialog"]').text()).toContain('Popover content')
  })
})
