import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAuditLog from './UvAuditLog.vue'

describe('UvAuditLog', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAuditLog, { props: { label: 'Audit Log', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Audit Log')
    expect(wrapper.find('[data-uv-component=UvAuditLog]').exists()).toBe(true)
  })
})
