import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPlaylist from './UvPlaylist.vue'

describe('UvPlaylist', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPlaylist, { props: { label: 'Playlist', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Playlist')
    expect(wrapper.find('[data-uv-component=UvPlaylist]').exists()).toBe(true)
  })
})
