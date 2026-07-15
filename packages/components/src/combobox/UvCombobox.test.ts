import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCombobox from './UvCombobox.vue'

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react', disabled: true },
  { label: 'Angular', value: 'angular' }
]

describe('UvCombobox', () => {
  it('filters options and selects with the keyboard', async () => {
    const wrapper = mount(UvCombobox, { attachTo: document.body, props: { label: 'Framework', options } })
    const input = wrapper.get('input[role="combobox"]')
    await input.trigger('focus')
    await input.setValue('ang')
    expect(wrapper.get('[role="listbox"]').text()).toContain('Angular')
    await input.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['angular'])
    wrapper.unmount()
  })

  it('supports JSON options and ignores disabled choices', async () => {
    const wrapper = mount(UvCombobox, { props: { optionsJson: JSON.stringify(options), openOnFocus: true } })
    const input = wrapper.get('input[role="combobox"]')
    await input.trigger('focus')
    const disabled = wrapper.findAll('[role="option"]')[1]
    await disabled?.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})
