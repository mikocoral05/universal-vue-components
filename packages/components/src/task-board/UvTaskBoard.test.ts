import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTaskBoard from './UvTaskBoard.vue'

describe('UvTaskBoard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTaskBoard, { props: { label: 'Task Board', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Task Board')
    expect(wrapper.find('[data-uv-component=UvTaskBoard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
