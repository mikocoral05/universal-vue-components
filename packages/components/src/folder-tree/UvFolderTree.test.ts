import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFolderTree from './UvFolderTree.vue'

describe('UvFolderTree', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFolderTree, { props: { label: 'Folder Tree', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Folder Tree')
    expect(wrapper.find('[data-uv-component=UvFolderTree]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
