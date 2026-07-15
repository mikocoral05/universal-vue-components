import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTable from './UvTable.vue'

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'downloads', label: 'Downloads', sortable: true, align: 'right' as const }
]
const rows = [
  { id: 'vue', name: 'Vue', downloads: 10 },
  { id: 'angular', name: 'Angular', downloads: 5 }
]

describe('UvTable', () => {
  it('renders semantic rows and sorts columns', async () => {
    const wrapper = mount(UvTable, { props: { columns, rows, caption: 'Framework usage' } })
    expect(wrapper.get('caption').text()).toBe('Framework usage')
    await wrapper.findAll('.uv-table__sort')[0]?.trigger('click')
    expect(wrapper.findAll('tbody tr')[0]?.text()).toContain('Angular')
    expect(wrapper.emitted('sort-change')?.[0]?.[0]).toEqual({ key: 'name', direction: 'asc' })
  })

  it('supports JSON data and row selection', async () => {
    const wrapper = mount(UvTable, { props: { columnsJson: JSON.stringify(columns), rowsJson: JSON.stringify(rows), selectable: true } })
    const rowCheckbox = wrapper.findAll('tbody input[type="checkbox"]')[0]
    await rowCheckbox?.setValue(true)
    expect(wrapper.emitted('selection-change')?.[0]?.[0]).toMatchObject({ selectedKeys: ['vue'] })
  })
})
