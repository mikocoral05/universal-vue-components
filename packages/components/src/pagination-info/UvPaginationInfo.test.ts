import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPaginationInfo from './UvPaginationInfo.vue'

describe('UvPaginationInfo', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPaginationInfo, { props: { label: 'Pagination Info', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Pagination Info')
    expect(wrapper.find('[data-uv-component=UvPaginationInfo]').exists()).toBe(true)
  })
})
