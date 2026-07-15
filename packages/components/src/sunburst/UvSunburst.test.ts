import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSunburst from './UvSunburst.vue'

describe('UvSunburst', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSunburst, { props: { label: 'Sunburst', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Sunburst')
    expect(wrapper.find('[data-uv-component=UvSunburst]').exists()).toBe(true)
  })
})
