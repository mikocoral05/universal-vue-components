import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVariantPicker from './UvVariantPicker.vue'

describe('UvVariantPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVariantPicker, { props: { label: 'Variant Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Variant Picker')
    expect(wrapper.find('[data-uv-component=UvVariantPicker]').exists()).toBe(true)
  })
})
