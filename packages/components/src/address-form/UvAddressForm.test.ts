import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAddressForm from './UvAddressForm.vue'

describe('UvAddressForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAddressForm, { props: { label: 'Address Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Address Form')
    expect(wrapper.find('[data-uv-component=UvAddressForm]').exists()).toBe(true)
  })
})
