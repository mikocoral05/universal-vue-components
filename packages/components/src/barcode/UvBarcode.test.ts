import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBarcode from './UvBarcode.vue'

describe('UvBarcode', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBarcode, { props: { label: 'Barcode', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Barcode')
    expect(wrapper.find('[data-uv-component=UvBarcode]').exists()).toBe(true)
  })
})
