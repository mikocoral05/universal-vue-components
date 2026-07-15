import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIssueDetail from './UvIssueDetail.vue'

describe('UvIssueDetail', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIssueDetail, { props: { label: 'Issue Detail', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Issue Detail')
    expect(wrapper.find('[data-uv-component=UvIssueDetail]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
