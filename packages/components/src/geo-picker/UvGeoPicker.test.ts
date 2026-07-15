import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvGeoPicker from './UvGeoPicker.vue'

describe('UvGeoPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvGeoPicker, { props: { label: 'Geo Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Geo Picker')
    expect(wrapper.find('[data-uv-component=UvGeoPicker]').exists()).toBe(true)
  })
})
