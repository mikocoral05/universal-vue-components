import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSubmitButton from './UvSubmitButton.vue'

describe('UvSubmitButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSubmitButton, { props: { label: 'Submit Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Submit Button')
    expect(wrapper.find('[data-uv-component=UvSubmitButton]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
