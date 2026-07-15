import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTreeTable from './UvTreeTable.vue'

describe('UvTreeTable', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTreeTable, { props: { label: 'Tree Table', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Tree Table')
    expect(wrapper.find('[data-uv-component=UvTreeTable]').exists()).toBe(true)
  })
})
