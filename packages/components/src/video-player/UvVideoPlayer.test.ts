import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVideoPlayer from './UvVideoPlayer.vue'

describe('UvVideoPlayer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVideoPlayer, { props: { label: 'Video Player', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Video Player')
    expect(wrapper.find('[data-uv-component=UvVideoPlayer]').exists()).toBe(true)
  })
})
