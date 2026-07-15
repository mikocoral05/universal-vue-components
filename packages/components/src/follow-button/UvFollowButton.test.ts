import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFollowButton from './UvFollowButton.vue'

describe('UvFollowButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFollowButton, { props: { label: 'Follow Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Follow Button')
    expect(wrapper.find('[data-uv-component=UvFollowButton]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
