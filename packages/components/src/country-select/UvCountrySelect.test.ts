import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCountrySelect from './UvCountrySelect.vue'

describe('UvCountrySelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCountrySelect, { props: { label: 'Country Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Country Select')
    expect(wrapper.find('[data-uv-component=UvCountrySelect]').exists()).toBe(true)
  })
})
