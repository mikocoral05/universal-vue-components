import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDiffViewer from './UvDiffViewer.vue'

describe('UvDiffViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDiffViewer, { props: { label: 'Diff Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Diff Viewer')
    expect(wrapper.find('[data-uv-component=UvDiffViewer]').exists()).toBe(true)
  })
})
