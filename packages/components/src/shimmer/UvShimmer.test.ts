import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvShimmer from './UvShimmer.vue'

describe('UvShimmer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvShimmer, { props: { label: 'Shimmer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Shimmer')
    expect(wrapper.find('[data-uv-component=UvShimmer]').exists()).toBe(true)
  })
})
