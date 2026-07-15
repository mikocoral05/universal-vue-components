import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIssueLabel from './UvIssueLabel.vue'

describe('UvIssueLabel', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIssueLabel, { props: { label: 'Issue Label', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Issue Label')
    expect(wrapper.find('[data-uv-component=UvIssueLabel]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
