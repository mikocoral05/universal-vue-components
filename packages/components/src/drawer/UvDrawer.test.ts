import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDrawer from './UvDrawer.vue'

describe('UvDrawer', () => {
  it('renders dialog semantics and closes with the dismiss button', async () => {
    const wrapper = mount(UvDrawer, { attachTo: document.body, props: { modelValue: true, title: 'Filters', placement: 'left' } })
    expect(wrapper.get('[role="dialog"]').attributes('aria-modal')).toBe('true')
    expect(wrapper.get('[role="dialog"]').classes()).toContain('uv-drawer--left')
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
    expect(wrapper.emitted('close')?.[0]).toEqual(['dismiss'])
    wrapper.unmount()
  })

  it('closes with Escape', async () => {
    const wrapper = mount(UvDrawer, { attachTo: document.body, props: { modelValue: true, title: 'Navigation' } })
    await document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(wrapper.emitted('close')?.[0]).toEqual(['escape'])
    wrapper.unmount()
  })
})
