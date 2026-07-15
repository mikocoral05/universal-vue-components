import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTwoFactorForm from './UvTwoFactorForm.vue'

describe('UvTwoFactorForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTwoFactorForm, { props: { label: 'Two Factor Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Two Factor Form')
    expect(wrapper.find('[data-uv-component=UvTwoFactorForm]').exists()).toBe(true)
  })
})
