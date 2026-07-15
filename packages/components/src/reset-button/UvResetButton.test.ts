import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvResetButton from './UvResetButton.vue'

describe('UvResetButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvResetButton, { props: { label: 'Reset Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Reset Button')
    expect(wrapper.find('[data-uv-component=UvResetButton]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
