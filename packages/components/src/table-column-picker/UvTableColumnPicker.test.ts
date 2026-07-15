import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTableColumnPicker from './UvTableColumnPicker.vue'

describe('UvTableColumnPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTableColumnPicker, { props: { label: 'Table Column Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Table Column Picker')
    expect(wrapper.find('[data-uv-component=UvTableColumnPicker]').exists()).toBe(true)
  })
})
