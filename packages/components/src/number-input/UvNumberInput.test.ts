import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvNumberInput from './UvNumberInput.vue'

describe('UvNumberInput', () => {
  it('increments using the configured step', async () => {
    const wrapper = mount(UvNumberInput, { props: { modelValue: 1.5, step: 0.5, label: 'Quantity' } })
    await wrapper.get('[aria-label="Increase value"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    expect(wrapper.emitted('increment')?.[0]).toEqual([{ value: 2 }])
  })

  it('clamps values on change', async () => {
    const wrapper = mount(UvNumberInput, { props: { modelValue: 2, max: 5 } })
    const input = wrapper.get('input')
    await input.setValue('9')
    await input.trigger('change')
    expect(wrapper.emitted('change')?.at(-1)).toEqual([{ value: 5 }])
  })
})
