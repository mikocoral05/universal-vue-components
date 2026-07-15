import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAlertRule from './UvAlertRule.vue'

describe('UvAlertRule', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAlertRule, { props: { label: 'Alert Rule', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Alert Rule')
    expect(wrapper.find('[data-uv-component=UvAlertRule]').exists()).toBe(true)
  })
})
