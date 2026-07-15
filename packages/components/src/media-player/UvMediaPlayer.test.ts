import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMediaPlayer from './UvMediaPlayer.vue'

describe('UvMediaPlayer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMediaPlayer, { props: { label: 'Media Player', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Media Player')
    expect(wrapper.find('[data-uv-component=UvMediaPlayer]').exists()).toBe(true)
  })
})
