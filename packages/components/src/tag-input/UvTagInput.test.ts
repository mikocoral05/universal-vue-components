import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTagInput from './UvTagInput.vue'

describe('UvTagInput', () => {
  it('adds tags with Enter and removes them with a labeled button', async () => {
    const wrapper = mount(UvTagInput, { props: { modelValue: ['vue'], label: 'Tags' } })
    const input = wrapper.get('input[role="combobox"]')
    await input.setValue('custom-elements')
    await input.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['vue', 'custom-elements']])
    await wrapper.get('[aria-label="Remove vue"]').trigger('click')
    expect(wrapper.emitted('remove')?.[0]).toEqual([{ value: 'vue', index: 0 }])
  })

  it('reports duplicate values', async () => {
    const wrapper = mount(UvTagInput, { props: { modelValue: ['vue'] } })
    const input = wrapper.get('input[role="combobox"]')
    await input.setValue('Vue')
    await input.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('invalid')?.[0]).toEqual([{ value: 'Vue', reason: 'duplicate' }])
    expect(wrapper.get('[role="alert"]').text()).toContain('already')
  })

  it('accepts initial values and suggestions through JSON', async () => {
    const wrapper = mount(UvTagInput, { props: { valuesJson: '["vue"]', suggestionsJson: '["react"]' } })
    expect(wrapper.text()).toContain('vue')
    await wrapper.get('input[role="combobox"]').setValue('rea')
    expect(wrapper.get('[role="option"]').text()).toBe('react')
  })
})
