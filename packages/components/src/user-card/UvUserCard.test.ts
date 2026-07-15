import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUserCard from './UvUserCard.vue'

describe('UvUserCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUserCard, { props: { label: 'User Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('User Card')
    expect(wrapper.find('[data-uv-component=UvUserCard]').exists()).toBe(true)
  })
})
