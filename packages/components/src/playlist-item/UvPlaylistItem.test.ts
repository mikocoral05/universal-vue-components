import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPlaylistItem from './UvPlaylistItem.vue'

describe('UvPlaylistItem', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPlaylistItem, { props: { label: 'Playlist Item', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Playlist Item')
    expect(wrapper.find('[data-uv-component=UvPlaylistItem]').exists()).toBe(true)
  })
})
