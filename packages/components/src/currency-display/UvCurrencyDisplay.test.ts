import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCurrencyDisplay from './UvCurrencyDisplay.vue'

describe('UvCurrencyDisplay', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCurrencyDisplay, { props: { label: 'Currency Display', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Currency Display')
    expect(wrapper.find('[data-uv-component=UvCurrencyDisplay]').exists()).toBe(true)
  })
})
