import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPromoCodeInput from './UvPromoCodeInput.vue'

describe('UvPromoCodeInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPromoCodeInput, { props: { label: 'Promo Code Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Promo Code Input')
    expect(wrapper.find('[data-uv-component=UvPromoCodeInput]').exists()).toBe(true)
  })
})
