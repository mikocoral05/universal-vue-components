import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUsernameInput from './UvUsernameInput.vue'

describe('UvUsernameInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUsernameInput, { props: { label: 'Username Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Username Input')
    expect(wrapper.find('[data-uv-component=UvUsernameInput]').exists()).toBe(true)
  })
})
