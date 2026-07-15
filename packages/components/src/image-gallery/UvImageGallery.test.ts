import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvImageGallery from './UvImageGallery.vue'

describe('UvImageGallery', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvImageGallery, { props: { label: 'Image Gallery', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Image Gallery')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
