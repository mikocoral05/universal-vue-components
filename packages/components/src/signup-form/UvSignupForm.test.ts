import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSignupForm from './UvSignupForm.vue'

describe('UvSignupForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSignupForm, { props: { label: 'Signup Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Signup Form')
    expect(wrapper.find('[data-uv-component=UvSignupForm]').exists()).toBe(true)
  })
})
