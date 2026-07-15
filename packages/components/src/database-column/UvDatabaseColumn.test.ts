import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDatabaseColumn from './UvDatabaseColumn.vue'

describe('UvDatabaseColumn', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDatabaseColumn, { props: { label: 'Database Column', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Database Column')
    expect(wrapper.find('[data-uv-component=UvDatabaseColumn]').exists()).toBe(true)
  })
})
