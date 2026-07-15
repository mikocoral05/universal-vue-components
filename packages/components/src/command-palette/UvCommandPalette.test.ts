import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommandPalette from './UvCommandPalette.vue'

const commands = [{ id: 'docs', label: 'Open documentation', group: 'Navigate' }, { id: 'delete', label: 'Delete project', disabled: true }]

describe('UvCommandPalette', () => {
  it('filters commands and emits a rich selection detail', async () => {
    const wrapper = mount(UvCommandPalette, { props: { mode: 'inline', commands } })
    const input = wrapper.get('[role="combobox"]')
    await input.setValue('documentation')
    expect(wrapper.findAll('[role="option"]')).toHaveLength(1)
    await input.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('select')?.[0]?.[0]).toMatchObject({ id: 'docs', index: 0 })
  })

  it('opens as a dialog and accepts JSON commands', async () => {
    const wrapper = mount(UvCommandPalette, { attachTo: document.body, props: { commandsJson: JSON.stringify(commands), hotkey: false } })
    await wrapper.get('button[aria-haspopup="dialog"]').trigger('click')
    expect(wrapper.get('[role="dialog"]').attributes('aria-modal')).toBe('true')
    expect(wrapper.findAll('[role="option"]')).toHaveLength(2)
    await wrapper.get('[aria-label="Close command palette"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([false])
    wrapper.unmount()
  })
})
