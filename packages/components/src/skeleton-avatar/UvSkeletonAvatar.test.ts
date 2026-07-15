import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSkeletonAvatar from './UvSkeletonAvatar.vue'

describe('UvSkeletonAvatar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSkeletonAvatar, { props: { label: 'Skeleton Avatar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Skeleton Avatar')
    expect(wrapper.find('[data-uv-component=UvSkeletonAvatar]').exists()).toBe(true)
  })
})
