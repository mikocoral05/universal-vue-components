import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvServiceStatus from './UvServiceStatus.vue'

describe('UvServiceStatus', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvServiceStatus, { props: { label: 'Service Status', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Service Status')
    expect(wrapper.find('[data-uv-component=UvServiceStatus]').exists()).toBe(true)
  })
})
