import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTreemap from './UvTreemap.vue'

describe('UvTreemap', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTreemap, { props: { label: 'Treemap', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Treemap')
    expect(wrapper.find('[data-uv-component=UvTreemap]').exists()).toBe(true)
  })
})
