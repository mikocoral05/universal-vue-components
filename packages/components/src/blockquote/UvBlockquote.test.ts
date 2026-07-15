import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBlockquote from './UvBlockquote.vue'

describe('UvBlockquote', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBlockquote, { props: { label: 'Blockquote', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Blockquote')
    expect(wrapper.find('[data-uv-component=UvBlockquote]').exists()).toBe(true)
  })
})
