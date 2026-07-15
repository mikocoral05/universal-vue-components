import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLoginForm from './UvLoginForm.vue'

describe('UvLoginForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLoginForm, { props: { label: 'Login Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Login Form')
    expect(wrapper.find('[data-uv-component=UvLoginForm]').exists()).toBe(true)
  })
})
