import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProjectList from './UvProjectList.vue'

describe('UvProjectList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProjectList, { props: { label: 'Project List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Project List')
    expect(wrapper.find('[data-uv-component=UvProjectList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
