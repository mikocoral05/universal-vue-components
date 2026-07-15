import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvEventCard from './UvEventCard.vue'

describe('UvEventCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvEventCard, { props: { label: 'Event Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Event Card')
    expect(wrapper.find('[data-uv-component=UvEventCard]').exists()).toBe(true)
  })
})
