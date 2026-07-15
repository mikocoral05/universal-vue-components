import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileManager from './UvFileManager.vue'

describe('UvFileManager', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileManager, { props: { label: 'File Manager', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Manager')
    expect(wrapper.find('[data-uv-component=UvFileManager]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
