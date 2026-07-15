import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUnitInput from './UvUnitInput.vue'

describe('UvUnitInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUnitInput, { props: { label: 'Unit Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Unit Input')
    expect(wrapper.find('[data-uv-component=UvUnitInput]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
