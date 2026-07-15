import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInputAddon from './UvInputAddon.vue'

describe('UvInputAddon', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInputAddon, { props: { label: 'Input Addon', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Input Addon')
    expect(wrapper.find('[data-uv-component=UvInputAddon]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
