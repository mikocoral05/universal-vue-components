import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvNotificationSettings from './UvNotificationSettings.vue'

describe('UvNotificationSettings', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvNotificationSettings, { props: { label: 'Notification Settings', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Notification Settings')
    expect(wrapper.find('[data-uv-component=UvNotificationSettings]').exists()).toBe(true)
  })
})
