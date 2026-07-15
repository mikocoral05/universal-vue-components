import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDateTimePicker from './UvDateTimePicker.vue'

describe('UvDateTimePicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDateTimePicker, { props: { label: 'Date Time Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Date Time Picker')
    expect(wrapper.find('[data-uv-component=UvDateTimePicker]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
