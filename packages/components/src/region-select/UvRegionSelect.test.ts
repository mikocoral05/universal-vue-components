import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRegionSelect from './UvRegionSelect.vue'

describe('UvRegionSelect', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRegionSelect, { props: { label: 'Region Select', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Region Select')
    expect(wrapper.find('[data-uv-component=UvRegionSelect]').exists()).toBe(true)
  })
})
