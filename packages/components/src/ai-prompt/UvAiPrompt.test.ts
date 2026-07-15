import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAiPrompt from './UvAiPrompt.vue'

describe('UvAiPrompt', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAiPrompt, { props: { label: 'AI Prompt', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('AI Prompt')
    expect(wrapper.find('[data-uv-component=UvAiPrompt]').exists()).toBe(true)
  })
})
