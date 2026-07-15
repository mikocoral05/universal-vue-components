import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReactionPicker from './UvReactionPicker.vue'

describe('UvReactionPicker', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReactionPicker, { props: { label: 'Reaction Picker', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Reaction Picker')
    expect(wrapper.find('[data-uv-component=UvReactionPicker]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
