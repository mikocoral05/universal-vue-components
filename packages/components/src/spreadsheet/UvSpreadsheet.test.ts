import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSpreadsheet from './UvSpreadsheet.vue'

describe('UvSpreadsheet', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSpreadsheet, { props: { label: 'Spreadsheet', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Spreadsheet')
    expect(wrapper.find('[data-uv-component=UvSpreadsheet]').exists()).toBe(true)
  })
})
