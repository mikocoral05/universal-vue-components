import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLightbox from './UvLightbox.vue'

describe('UvLightbox', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLightbox, { props: { label: 'Lightbox', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Lightbox')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
