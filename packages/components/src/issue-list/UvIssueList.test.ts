import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIssueList from './UvIssueList.vue'

describe('UvIssueList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIssueList, { props: { label: 'Issue List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Issue List')
    expect(wrapper.find('[data-uv-component=UvIssueList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
