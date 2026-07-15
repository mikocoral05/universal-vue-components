import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvForwardButton from './UvForwardButton.vue'

describe('UvForwardButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvForwardButton, { props: { label: 'Forward Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Forward Button')
    expect(wrapper.find('[data-uv-component=UvForwardButton]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
