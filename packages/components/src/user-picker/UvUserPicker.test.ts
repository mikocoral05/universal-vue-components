import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUserPicker from './UvUserPicker.vue'

describe('UvUserPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUserPicker, { props: { label: 'User Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('User Picker')
    expect(wrapper.find('[data-uv-component=UvUserPicker]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
