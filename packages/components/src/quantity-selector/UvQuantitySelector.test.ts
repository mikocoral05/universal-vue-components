import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvQuantitySelector from './UvQuantitySelector.vue'

describe('UvQuantitySelector', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvQuantitySelector, { props: { label: 'Quantity Selector', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Quantity Selector')
    expect(wrapper.find('[data-uv-component=UvQuantitySelector]').exists()).toBe(true)
  })
})
