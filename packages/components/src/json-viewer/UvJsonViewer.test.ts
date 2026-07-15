import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvJsonViewer from './UvJsonViewer.vue'

describe('UvJsonViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvJsonViewer, { props: { label: 'JSON Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('JSON Viewer')
    expect(wrapper.find('[data-uv-component=UvJsonViewer]').exists()).toBe(true)
  })
})
