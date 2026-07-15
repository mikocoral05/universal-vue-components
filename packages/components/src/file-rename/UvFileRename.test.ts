import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileRename from './UvFileRename.vue'

describe('UvFileRename', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileRename, { props: { label: 'File Rename', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Rename')
    expect(wrapper.find('[data-uv-component=UvFileRename]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
