import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDecimalInput from './UvDecimalInput.vue'

describe('UvDecimalInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDecimalInput, { props: { label: 'Decimal Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Decimal Input')
    expect(wrapper.find('[data-uv-component=UvDecimalInput]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
