import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFilePreview from './UvFilePreview.vue'

describe('UvFilePreview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFilePreview, { props: { label: 'File Preview', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Preview')
    expect(wrapper.find('[data-uv-component=UvFilePreview]').exists()).toBe(true)
  })
})
