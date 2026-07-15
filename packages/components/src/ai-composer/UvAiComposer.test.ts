import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAiComposer from './UvAiComposer.vue'

describe('UvAiComposer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAiComposer, { props: { label: 'AI Composer', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('AI Composer')
    expect(wrapper.find('[data-uv-component=UvAiComposer]').exists()).toBe(true)
  })
})
