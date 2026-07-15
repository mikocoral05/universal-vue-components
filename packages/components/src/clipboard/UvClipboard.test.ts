import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvClipboard from './UvClipboard.vue'

describe('UvClipboard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvClipboard, { props: { label: 'Clipboard', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Clipboard')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
