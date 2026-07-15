import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileVersion from './UvFileVersion.vue'

describe('UvFileVersion', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileVersion, { props: { label: 'File Version', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Version')
    expect(wrapper.find('[data-uv-component=UvFileVersion]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
