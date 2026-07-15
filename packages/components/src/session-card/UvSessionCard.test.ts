import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSessionCard from './UvSessionCard.vue'

describe('UvSessionCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSessionCard, { props: { label: 'Session Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Session Card')
    expect(wrapper.find('[data-uv-component=UvSessionCard]').exists()).toBe(true)
  })
})
