import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIssueCard from './UvIssueCard.vue'

describe('UvIssueCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIssueCard, { props: { label: 'Issue Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Issue Card')
    expect(wrapper.find('[data-uv-component=UvIssueCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
