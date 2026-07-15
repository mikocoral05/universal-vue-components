import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVideo from './UvVideo.vue'

describe('UvVideo', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVideo, { props: { label: 'Video', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Video')
    expect(wrapper.find('[data-uv-component=UvVideo]').exists()).toBe(true)
  })
})
