import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvConnectionStatus from './UvConnectionStatus.vue'

describe('UvConnectionStatus', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvConnectionStatus, { props: { label: 'Connection Status', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Connection Status')
    expect(wrapper.find('[data-uv-component=UvConnectionStatus]').exists()).toBe(true)
  })
})
