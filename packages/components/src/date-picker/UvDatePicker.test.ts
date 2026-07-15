import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDatePicker from './UvDatePicker.vue'

describe('UvDatePicker', () => {
  it('opens its calendar and selects a date', async () => {
    const wrapper = mount(UvDatePicker, { props: { modelValue: '2026-06-20', label: 'Release date', locale: 'en-US' } })
    await wrapper.get('input[role="combobox"]').trigger('click')
    expect(wrapper.get('[role="dialog"]').isVisible()).toBe(true)
    await wrapper.get('[data-date="2026-06-21"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2026-06-21'])
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })

  it('clears the current date', async () => {
    const wrapper = mount(UvDatePicker, { props: { modelValue: '2026-06-20' } })
    await wrapper.get('[aria-label="Clear date"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    expect(wrapper.emitted('clear')).toHaveLength(1)
  })
})
