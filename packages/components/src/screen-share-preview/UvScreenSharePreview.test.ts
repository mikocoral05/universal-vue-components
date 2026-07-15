import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvScreenSharePreview from './UvScreenSharePreview.vue'

describe('UvScreenSharePreview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvScreenSharePreview, { props: { label: 'Screen Share Preview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Screen Share Preview')
    expect(wrapper.find('[data-uv-component=UvScreenSharePreview]').exists()).toBe(true)
  })
})
