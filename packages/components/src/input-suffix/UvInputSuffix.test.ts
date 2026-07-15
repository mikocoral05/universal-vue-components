import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInputSuffix from './UvInputSuffix.vue'

describe('UvInputSuffix', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInputSuffix, { props: { label: 'Input Suffix', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Input Suffix')
    expect(wrapper.find('[data-uv-component=UvInputSuffix]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
