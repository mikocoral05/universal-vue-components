import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTaskPriority from './UvTaskPriority.vue'

describe('UvTaskPriority', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTaskPriority, { props: { label: 'Task Priority', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Task Priority')
    expect(wrapper.find('[data-uv-component=UvTaskPriority]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
