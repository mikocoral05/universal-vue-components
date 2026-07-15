import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRating from './UvRating.vue'

describe('UvRating', () => {
  it('selects a rating and emits previous value detail', async () => {
    const wrapper = mount(UvRating, { props: { modelValue: 2, label: 'Quality' } })
    await wrapper.get('[data-rating="4"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([4])
    expect(wrapper.emitted('change')?.[0]).toEqual([{ value: 4, previousValue: 2 }])
  })

  it('supports arrow-key changes', async () => {
    const wrapper = mount(UvRating, { props: { modelValue: 3 } })
    await wrapper.get('[role="radiogroup"]').trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([4])
  })
})
