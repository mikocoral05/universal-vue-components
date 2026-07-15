import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRichText from './UvRichText.vue'

describe('UvRichText', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRichText, { props: { label: 'Rich Text', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Rich Text')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
