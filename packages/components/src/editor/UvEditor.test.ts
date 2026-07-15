import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvEditor from './UvEditor.vue'

describe('UvEditor', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvEditor, { props: { label: 'Editor', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Editor')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
