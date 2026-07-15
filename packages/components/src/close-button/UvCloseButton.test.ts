import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCloseButton from './UvCloseButton.vue'

describe('UvCloseButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCloseButton, { props: { label: 'Close Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Close Button')
    expect(wrapper.find('[data-uv-component=UvCloseButton]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
