import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileShare from './UvFileShare.vue'

describe('UvFileShare', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileShare, { props: { label: 'File Share', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Share')
    expect(wrapper.find('[data-uv-component=UvFileShare]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
