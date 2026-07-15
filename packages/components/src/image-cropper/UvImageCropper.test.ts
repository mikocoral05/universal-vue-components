import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvImageCropper from './UvImageCropper.vue'

describe('UvImageCropper', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvImageCropper, { props: { label: 'Image Cropper', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Image Cropper')
    expect(wrapper.find('[data-uv-component=UvImageCropper]').exists()).toBe(true)
  })
})
