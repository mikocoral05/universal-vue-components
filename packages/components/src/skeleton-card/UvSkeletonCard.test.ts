import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSkeletonCard from './UvSkeletonCard.vue'

describe('UvSkeletonCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSkeletonCard, { props: { label: 'Skeleton Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Skeleton Card')
    expect(wrapper.find('[data-uv-component=UvSkeletonCard]').exists()).toBe(true)
  })
})
