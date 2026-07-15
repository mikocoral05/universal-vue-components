import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPdfViewer from './UvPdfViewer.vue'

describe('UvPdfViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPdfViewer, { props: { label: 'PDF Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('PDF Viewer')
    expect(wrapper.find('[data-uv-component=UvPdfViewer]').exists()).toBe(true)
  })
})
