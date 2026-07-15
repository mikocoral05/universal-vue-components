import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDateTimeRangePicker from './UvDateTimeRangePicker.vue'

describe('UvDateTimeRangePicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDateTimeRangePicker, { props: { label: 'Date Time Range Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Date Time Range Picker')
    expect(wrapper.find('[data-uv-component=UvDateTimeRangePicker]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
