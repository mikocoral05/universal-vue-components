import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCsvViewer from './UvCsvViewer.vue'

describe('UvCsvViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCsvViewer, { props: { label: 'CSV Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('CSV Viewer')
    expect(wrapper.find('[data-uv-component=UvCsvViewer]').exists()).toBe(true)
  })
})
