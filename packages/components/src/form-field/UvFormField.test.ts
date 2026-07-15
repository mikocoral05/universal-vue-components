import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFormField from './UvFormField.vue'

describe('UvFormField', () => {
  it('provides accessible ids and state to its control slot', () => {
    const wrapper = mount(UvFormField, {
      props: { label: 'Email', hint: 'Work address', required: true },
      slots: { default: '<template #default="slot"><input :id="slot.controlId" :aria-describedby="slot.describedBy" /></template>' }
    })
    const label = wrapper.get('label')
    const input = wrapper.get('input')
    expect(label.attributes('for')).toBe(input.attributes('id'))
    expect(input.attributes('aria-describedby')).toContain('-hint')
    expect(wrapper.text()).toContain('Work address')
  })

  it('announces errors and hides the hint while invalid', () => {
    const wrapper = mount(UvFormField, { props: { label: 'Name', hint: 'Public name', error: 'Name is required' } })
    expect(wrapper.get('[role="alert"]').text()).toBe('Name is required')
    expect(wrapper.text()).not.toContain('Public name')
  })
})
