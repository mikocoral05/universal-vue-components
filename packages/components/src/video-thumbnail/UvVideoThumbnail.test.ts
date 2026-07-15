import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVideoThumbnail from './UvVideoThumbnail.vue'

describe('UvVideoThumbnail', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvVideoThumbnail, { props: { label: 'Video Thumbnail', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvVideoThumbnail')
    expect(wrapper.text()).toContain('Video Thumbnail')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
