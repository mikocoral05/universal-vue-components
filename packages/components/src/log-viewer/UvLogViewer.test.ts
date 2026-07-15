import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLogViewer from './UvLogViewer.vue'

describe('UvLogViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLogViewer, { props: { label: 'Log Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Log Viewer')
    expect(wrapper.find('[data-uv-component=UvLogViewer]').exists()).toBe(true)
  })
})
