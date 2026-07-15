import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInputPrefix from './UvInputPrefix.vue'

describe('UvInputPrefix', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInputPrefix, { props: { label: 'Input Prefix', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Input Prefix')
    expect(wrapper.find('[data-uv-component=UvInputPrefix]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
