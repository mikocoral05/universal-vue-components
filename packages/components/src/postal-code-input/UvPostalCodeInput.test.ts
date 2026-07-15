import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPostalCodeInput from './UvPostalCodeInput.vue'

describe('UvPostalCodeInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPostalCodeInput, { props: { label: 'Postal Code Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Postal Code Input')
    expect(wrapper.find('[data-uv-component=UvPostalCodeInput]').exists()).toBe(true)
  })
})
