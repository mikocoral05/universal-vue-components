import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileList from './UvFileList.vue'

describe('UvFileList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileList, { props: { label: 'File List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File List')
    expect(wrapper.find('[data-uv-component=UvFileList]').exists()).toBe(true)
  })
})
