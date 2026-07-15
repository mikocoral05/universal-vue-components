import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDocumentViewer from './UvDocumentViewer.vue'

describe('UvDocumentViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDocumentViewer, { props: { label: 'Document Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Document Viewer')
    expect(wrapper.find('[data-uv-component=UvDocumentViewer]').exists()).toBe(true)
  })
})
