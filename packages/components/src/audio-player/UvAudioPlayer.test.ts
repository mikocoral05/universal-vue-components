import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAudioPlayer from './UvAudioPlayer.vue'

describe('UvAudioPlayer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAudioPlayer, { props: { label: 'Audio Player', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Audio Player')
    expect(wrapper.find('[data-uv-component=UvAudioPlayer]').exists()).toBe(true)
  })
})
