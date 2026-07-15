import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTypingIndicator from './UvTypingIndicator.vue'

describe('UvTypingIndicator', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTypingIndicator, { props: { label: 'Typing Indicator', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Typing Indicator')
    expect(wrapper.find('[data-uv-component=UvTypingIndicator]').exists()).toBe(true)
  })
})
