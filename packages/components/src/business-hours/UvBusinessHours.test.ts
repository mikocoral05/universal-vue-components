import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBusinessHours from './UvBusinessHours.vue'

describe('UvBusinessHours', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBusinessHours, { props: { label: 'Business Hours', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Business Hours')
    expect(wrapper.find('[data-uv-component=UvBusinessHours]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
