import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSlider from './UvSlider.vue'

describe('UvSlider', () => {
  it('emits numeric values from the native range input', async () => {
    const wrapper = mount(UvSlider, { props: { modelValue: 25, label: 'Volume', showValue: true } })
    await wrapper.get('input').setValue('40')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([40])
    expect(wrapper.get('label').text()).toBe('Volume')
  })

  it('exposes formatted value text', () => {
    const wrapper = mount(UvSlider, { props: { modelValue: 50, valueSuffix: '%' } })
    expect(wrapper.get('input').attributes('aria-valuetext')).toBe('50%')
  })
})
