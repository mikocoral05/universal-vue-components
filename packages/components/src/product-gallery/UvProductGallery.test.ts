import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProductGallery from './UvProductGallery.vue'

describe('UvProductGallery', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProductGallery, { props: { label: 'Product Gallery', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Product Gallery')
    expect(wrapper.find('[data-uv-component=UvProductGallery]').exists()).toBe(true)
  })
})
