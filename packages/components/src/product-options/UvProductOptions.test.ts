import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProductOptions from './UvProductOptions.vue'

describe('UvProductOptions', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProductOptions, { props: { label: 'Product Options', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Product Options')
    expect(wrapper.find('[data-uv-component=UvProductOptions]').exists()).toBe(true)
  })
})
