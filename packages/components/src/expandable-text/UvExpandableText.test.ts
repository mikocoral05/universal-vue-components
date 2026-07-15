import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvExpandableText from './UvExpandableText.vue'

describe('UvExpandableText', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvExpandableText, { props: { label: 'Expandable Text', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Expandable Text')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
