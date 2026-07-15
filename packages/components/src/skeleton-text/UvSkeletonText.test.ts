import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSkeletonText from './UvSkeletonText.vue'

describe('UvSkeletonText', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSkeletonText, { props: { label: 'Skeleton Text', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Skeleton Text')
    expect(wrapper.find('[data-uv-component=UvSkeletonText]').exists()).toBe(true)
  })
})
