import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvScientificInput from './UvScientificInput.vue'

describe('UvScientificInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvScientificInput, { props: { label: 'Scientific Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Scientific Input')
    expect(wrapper.find('[data-uv-component=UvScientificInput]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
