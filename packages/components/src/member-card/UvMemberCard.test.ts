import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMemberCard from './UvMemberCard.vue'

describe('UvMemberCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMemberCard, { props: { label: 'Member Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Member Card')
    expect(wrapper.find('[data-uv-component=UvMemberCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
