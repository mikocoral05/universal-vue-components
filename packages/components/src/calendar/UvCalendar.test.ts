import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCalendar from './UvCalendar.vue'

describe('UvCalendar', () => {
  it('selects a date and emits serializable detail', async () => {
    const wrapper = mount(UvCalendar, { props: { modelValue: '2026-06-20', locale: 'en-US' } })
    const button = wrapper.get('[data-date="2026-06-21"]')
    await button.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2026-06-21'])
    expect(wrapper.emitted('change')?.[0]?.[0]).toMatchObject({ value: '2026-06-21' })
  })

  it('respects disabled dates supplied through JSON', () => {
    const wrapper = mount(UvCalendar, {
      props: { modelValue: '2026-06-20', disabledDatesJson: '["2026-06-21"]' }
    })
    expect(wrapper.get('[data-date="2026-06-21"]').attributes()).toHaveProperty('disabled')
  })

  it('moves focus with arrow keys', async () => {
    const wrapper = mount(UvCalendar, { attachTo: document.body, props: { modelValue: '2026-06-20' } })
    const selected = wrapper.get('[data-date="2026-06-20"]')
    await selected.trigger('keydown', { key: 'ArrowRight' })
    expect(document.activeElement?.getAttribute('data-date')).toBe('2026-06-21')
    wrapper.unmount()
  })
})
