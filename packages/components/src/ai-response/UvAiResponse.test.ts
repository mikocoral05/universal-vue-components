import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAiResponse from './UvAiResponse.vue'

describe('UvAiResponse', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAiResponse, { props: { label: 'AI Response', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('AI Response')
    expect(wrapper.find('[data-uv-component=UvAiResponse]').exists()).toBe(true)
  })
})
