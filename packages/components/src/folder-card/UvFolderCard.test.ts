import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFolderCard from './UvFolderCard.vue'

describe('UvFolderCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFolderCard, { props: { label: 'Folder Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Folder Card')
    expect(wrapper.find('[data-uv-component=UvFolderCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
