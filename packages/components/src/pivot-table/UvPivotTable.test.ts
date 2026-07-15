import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPivotTable from './UvPivotTable.vue'

describe('UvPivotTable', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPivotTable, { props: { label: 'Pivot Table', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Pivot Table')
    expect(wrapper.find('[data-uv-component=UvPivotTable]').exists()).toBe(true)
  })
})
