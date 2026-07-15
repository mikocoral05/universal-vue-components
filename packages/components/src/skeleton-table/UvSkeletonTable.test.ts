import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSkeletonTable from './UvSkeletonTable.vue'

describe('UvSkeletonTable', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSkeletonTable, { props: { label: 'Skeleton Table', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Skeleton Table')
    expect(wrapper.find('[data-uv-component=UvSkeletonTable]').exists()).toBe(true)
  })
})
