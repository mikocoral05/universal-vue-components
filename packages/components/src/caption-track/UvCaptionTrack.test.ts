import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCaptionTrack from './UvCaptionTrack.vue'

describe('UvCaptionTrack', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCaptionTrack, { props: { label: 'Caption Track', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Caption Track')
    expect(wrapper.find('[data-uv-component=UvCaptionTrack]').exists()).toBe(true)
  })
})
