import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDropdownMenu from './UvDropdownMenu.vue'

describe('UvDropdownMenu', () => {
  it('opens from the trigger and exposes menu semantics', async () => {
    const wrapper = mount(UvDropdownMenu, {
      props: { modelValue: false, label: 'Actions' },
      slots: { default: '<button role="menuitem">Edit</button>' }
    })
    await wrapper.get('.uv-dropdown__trigger').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
    expect(wrapper.get('.uv-dropdown__trigger').attributes('aria-haspopup')).toBe('menu')
  })

  it('emits selection and closes after a menu item click', async () => {
    const wrapper = mount(UvDropdownMenu, {
      props: { modelValue: true },
      slots: { default: '<button role="menuitem">Edit</button>' }
    })
    await wrapper.get('[role="menuitem"]').trigger('click')
    expect(wrapper.emitted('select')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })
})
