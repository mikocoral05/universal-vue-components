import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTaskStatus from './UvTaskStatus.vue'

describe('UvTaskStatus', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTaskStatus, { props: { label: 'Task Status', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Task Status')
    expect(wrapper.find('[data-uv-component=UvTaskStatus]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
