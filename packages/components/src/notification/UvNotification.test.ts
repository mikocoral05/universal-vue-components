import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvNotification from './UvNotification.vue'

describe('UvNotification', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvNotification, { props: { label: 'Notification', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Notification')
    expect(wrapper.find('[data-uv-component=UvNotification]').exists()).toBe(true)
  })
})
