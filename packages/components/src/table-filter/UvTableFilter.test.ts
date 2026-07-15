import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTableFilter from './UvTableFilter.vue'

describe('UvTableFilter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTableFilter, { props: { label: 'Table Filter', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Table Filter')
    expect(wrapper.find('[data-uv-component=UvTableFilter]').exists()).toBe(true)
  })
})
