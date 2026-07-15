import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProfileCard from './UvProfileCard.vue'

describe('UvProfileCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProfileCard, { props: { label: 'Profile Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Profile Card')
    expect(wrapper.find('[data-uv-component=UvProfileCard]').exists()).toBe(true)
  })
})
