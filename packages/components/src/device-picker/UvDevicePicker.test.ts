import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDevicePicker from './UvDevicePicker.vue'

describe('UvDevicePicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDevicePicker, { props: { label: 'Device Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Device Picker')
    expect(wrapper.find('[data-uv-component=UvDevicePicker]').exists()).toBe(true)
  })
})
