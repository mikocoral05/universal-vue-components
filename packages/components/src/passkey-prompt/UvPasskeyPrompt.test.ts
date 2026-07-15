import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPasskeyPrompt from './UvPasskeyPrompt.vue'

describe('UvPasskeyPrompt', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPasskeyPrompt, { props: { label: 'Passkey Prompt', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Passkey Prompt')
    expect(wrapper.find('[data-uv-component=UvPasskeyPrompt]').exists()).toBe(true)
  })
})
