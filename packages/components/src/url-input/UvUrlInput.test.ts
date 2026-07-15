import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUrlInput from './UvUrlInput.vue'

describe('UvUrlInput', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUrlInput, { props: { label: 'Url Input', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Url Input')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
