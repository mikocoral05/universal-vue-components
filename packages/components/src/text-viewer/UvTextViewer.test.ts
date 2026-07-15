import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTextViewer from './UvTextViewer.vue'

describe('UvTextViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTextViewer, { props: { label: 'Text Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Text Viewer')
    expect(wrapper.find('[data-uv-component=UvTextViewer]').exists()).toBe(true)
  })
})
