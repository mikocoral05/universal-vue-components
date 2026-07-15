import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSankeyDiagram from './UvSankeyDiagram.vue'

describe('UvSankeyDiagram', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSankeyDiagram, { props: { label: 'Sankey Diagram', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Sankey Diagram')
    expect(wrapper.find('[data-uv-component=UvSankeyDiagram]').exists()).toBe(true)
  })
})
