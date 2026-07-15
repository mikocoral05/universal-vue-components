import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvForgotPasswordForm from './UvForgotPasswordForm.vue'

describe('UvForgotPasswordForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvForgotPasswordForm, { props: { label: 'Forgot Password Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Forgot Password Form')
    expect(wrapper.find('[data-uv-component=UvForgotPasswordForm]').exists()).toBe(true)
  })
})
