import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIssueStatus from './UvIssueStatus.vue'

describe('UvIssueStatus', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIssueStatus, { props: { label: 'Issue Status', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Issue Status')
    expect(wrapper.find('[data-uv-component=UvIssueStatus]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
