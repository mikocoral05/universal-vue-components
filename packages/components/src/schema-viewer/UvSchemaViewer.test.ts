import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSchemaViewer from './UvSchemaViewer.vue'

describe('UvSchemaViewer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSchemaViewer, { props: { label: 'Schema Viewer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Schema Viewer')
    expect(wrapper.find('[data-uv-component=UvSchemaViewer]').exists()).toBe(true)
  })
})
