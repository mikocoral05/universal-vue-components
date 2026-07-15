import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPrice from './UvPrice.vue'

describe('UvPrice', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPrice, { props: { label: 'Price', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Price')
    expect(wrapper.find('[data-uv-component=UvPrice]').exists()).toBe(true)
  })
})
