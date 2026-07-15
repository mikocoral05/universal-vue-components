import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvKeySequence from './UvKeySequence.vue'

describe('UvKeySequence', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvKeySequence, { props: { label: 'Key Sequence', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Key Sequence')
    expect(wrapper.find('[data-uv-component=UvKeySequence]').exists()).toBe(true)
  })
})
