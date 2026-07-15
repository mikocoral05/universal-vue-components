import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCodeEditor from './UvCodeEditor.vue'

describe('UvCodeEditor', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCodeEditor, { props: { label: 'Code Editor', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Code Editor')
    const input = wrapper.find('input,textarea'); await input.setValue('updated'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
