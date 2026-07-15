import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReactionBar from './UvReactionBar.vue'

describe('UvReactionBar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReactionBar, { props: { label: 'Reaction Bar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Reaction Bar')
    expect(wrapper.find('[data-uv-component=UvReactionBar]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
