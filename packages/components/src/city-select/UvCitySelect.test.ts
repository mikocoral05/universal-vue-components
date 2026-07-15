import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCitySelect from './UvCitySelect.vue'

describe('UvCitySelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCitySelect, { props: { label: 'City Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('City Select')
    expect(wrapper.find('[data-uv-component=UvCitySelect]').exists()).toBe(true)
  })
})
