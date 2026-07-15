import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvWidgetGrid from './UvWidgetGrid.vue'

describe('UvWidgetGrid', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvWidgetGrid, { props: { label: 'Widget Grid', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Widget Grid')
    expect(wrapper.find('[data-uv-component=UvWidgetGrid]').exists()).toBe(true)
  })
})
