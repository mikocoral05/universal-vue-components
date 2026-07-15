import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFieldset from './UvFieldset.vue'

describe('UvFieldset', () => {
  it('uses native fieldset and legend semantics', () => {
    const wrapper = mount(UvFieldset, { props: { legend: 'Notifications', description: 'Choose channels', required: true }, slots: { default: '<input type="checkbox">' } })
    expect(wrapper.find('fieldset').exists()).toBe(true)
    expect(wrapper.get('legend').text()).toContain('Notifications')
    expect(wrapper.get('fieldset').attributes('aria-describedby')).toContain('description')
  })

  it('forwards disabled state and announces errors', () => {
    const wrapper = mount(UvFieldset, { props: { legend: 'Options', disabled: true, error: 'Choose one option' } })
    expect(wrapper.get('fieldset').attributes()).toHaveProperty('disabled')
    expect(wrapper.get('[role="alert"]').text()).toBe('Choose one option')
  })
})
