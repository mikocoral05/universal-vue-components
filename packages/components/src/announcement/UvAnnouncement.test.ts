import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAnnouncement from './UvAnnouncement.vue'

describe('UvAnnouncement', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAnnouncement, { props: { label: 'Announcement', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Announcement')
    expect(wrapper.find('[data-uv-component=UvAnnouncement]').exists()).toBe(true)
  })
})
