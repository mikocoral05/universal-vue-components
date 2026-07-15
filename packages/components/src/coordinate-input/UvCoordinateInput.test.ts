import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCoordinateInput from './UvCoordinateInput.vue'

describe('UvCoordinateInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCoordinateInput, { props: { label: 'Coordinate Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Coordinate Input')
    expect(wrapper.find('[data-uv-component=UvCoordinateInput]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
