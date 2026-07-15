import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVoteControl from './UvVoteControl.vue'

describe('UvVoteControl', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVoteControl, { props: { label: 'Vote Control', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Vote Control')
    expect(wrapper.find('[data-uv-component=UvVoteControl]').exists()).toBe(true)
  })
})
