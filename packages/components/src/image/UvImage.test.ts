import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvImage from './UvImage.vue'

describe('UvImage', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvImage, { props: { label: 'Image', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Image')
    expect(wrapper.find('[data-uv-component=UvImage]').exists()).toBe(true)
  })
})
