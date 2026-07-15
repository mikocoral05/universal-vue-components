import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvClearButton from './UvClearButton.vue'

describe('UvClearButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvClearButton, { props: { label: 'Clear Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Clear Button')
    expect(wrapper.find('[data-uv-component=UvClearButton]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
