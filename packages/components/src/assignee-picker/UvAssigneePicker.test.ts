import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAssigneePicker from './UvAssigneePicker.vue'

describe('UvAssigneePicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAssigneePicker, { props: { label: 'Assignee Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Assignee Picker')
    expect(wrapper.find('[data-uv-component=UvAssigneePicker]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
