import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvIntegerInput from './UvIntegerInput.vue'

describe('UvIntegerInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvIntegerInput, { props: { label: 'Integer Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Integer Input')
    expect(wrapper.find('[data-uv-component=UvIntegerInput]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
