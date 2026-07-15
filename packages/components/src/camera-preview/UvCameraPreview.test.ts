import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCameraPreview from './UvCameraPreview.vue'

describe('UvCameraPreview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCameraPreview, { props: { label: 'Camera Preview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Camera Preview')
    expect(wrapper.find('[data-uv-component=UvCameraPreview]').exists()).toBe(true)
  })
})
