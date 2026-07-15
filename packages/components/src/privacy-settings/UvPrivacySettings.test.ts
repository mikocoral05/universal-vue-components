import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPrivacySettings from './UvPrivacySettings.vue'

describe('UvPrivacySettings', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPrivacySettings, { props: { label: 'Privacy Settings', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Privacy Settings')
    expect(wrapper.find('[data-uv-component=UvPrivacySettings]').exists()).toBe(true)
  })
})
