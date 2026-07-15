import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDatabaseTable from './UvDatabaseTable.vue'

describe('UvDatabaseTable', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDatabaseTable, { props: { label: 'Database Table', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Database Table')
    expect(wrapper.find('[data-uv-component=UvDatabaseTable]').exists()).toBe(true)
  })
})
