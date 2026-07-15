import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMarkdown from './UvMarkdown.vue'

describe('UvMarkdown', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMarkdown, { props: { label: 'Markdown', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Markdown')
    expect(wrapper.find('[data-uv-component=UvMarkdown]').exists()).toBe(true)
  })
})
