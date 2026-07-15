import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAccountSwitcher from './UvAccountSwitcher.vue'

describe('UvAccountSwitcher', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAccountSwitcher, { props: { label: 'Account Switcher', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Account Switcher')
    expect(wrapper.find('[data-uv-component=UvAccountSwitcher]').exists()).toBe(true)
  })
})
