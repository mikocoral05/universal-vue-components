import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAnnouncer from './UvAnnouncer.vue'

describe('UvAnnouncer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAnnouncer, { props: { label: 'Announcer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Announcer')
    expect(wrapper.find('[data-uv-component=UvAnnouncer]').exists()).toBe(true)
  })
})
