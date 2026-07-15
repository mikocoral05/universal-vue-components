import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPresence from './UvPresence.vue'

describe('UvPresence', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPresence, { props: { label: 'Presence', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Presence')
    expect(wrapper.find('[data-uv-component=UvPresence]').exists()).toBe(true)
  })
})
