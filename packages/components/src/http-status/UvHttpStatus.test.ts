import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHttpStatus from './UvHttpStatus.vue'

describe('UvHttpStatus', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvHttpStatus, { props: { label: 'HTTP Status', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('HTTP Status')
    expect(wrapper.find('[data-uv-component=UvHttpStatus]').exists()).toBe(true)
  })
})
