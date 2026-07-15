import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileActivity from './UvFileActivity.vue'

describe('UvFileActivity', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileActivity, { props: { label: 'File Activity', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Activity')
    expect(wrapper.find('[data-uv-component=UvFileActivity]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
