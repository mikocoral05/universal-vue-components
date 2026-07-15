import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDocumentOutline from './UvDocumentOutline.vue'

describe('UvDocumentOutline', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDocumentOutline, { props: { label: 'Document Outline', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Document Outline')
    expect(wrapper.find('[data-uv-component=UvDocumentOutline]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
