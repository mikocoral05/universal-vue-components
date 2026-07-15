import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTaskList from './UvTaskList.vue'

describe('UvTaskList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTaskList, { props: { label: 'Task List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Task List')
    expect(wrapper.find('[data-uv-component=UvTaskList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
