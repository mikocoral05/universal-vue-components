import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTruncate from './UvTruncate.vue'

describe('UvTruncate', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTruncate, { props: { label: 'Truncate', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Truncate')
    expect(wrapper.find('[data-uv-component=UvTruncate]').exists()).toBe(true)
  })
})
