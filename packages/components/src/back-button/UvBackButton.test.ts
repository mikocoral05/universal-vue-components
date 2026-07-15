import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBackButton from './UvBackButton.vue'

describe('UvBackButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBackButton, { props: { label: 'Back Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Back Button')
    expect(wrapper.find('[data-uv-component=UvBackButton]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
