import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvColorSwatch from './UvColorSwatch.vue'

describe('UvColorSwatch', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvColorSwatch, { props: { label: 'Color Swatch', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Color Swatch')
    expect(wrapper.find('[data-uv-component=UvColorSwatch]').exists()).toBe(true)
  })
})
