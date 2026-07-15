import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDataTable from './UvDataTable.vue'

describe('UvDataTable', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDataTable, { props: { label: 'Data Table', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Data Table')
    expect(wrapper.find('[data-uv-component=UvDataTable]').exists()).toBe(true)
  })
})
