import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvNotificationCenter from './UvNotificationCenter.vue'

describe('UvNotificationCenter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvNotificationCenter, { props: { label: 'Notification Center', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Notification Center')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
