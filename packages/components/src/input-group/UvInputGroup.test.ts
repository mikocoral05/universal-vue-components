import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInputGroup from './UvInputGroup.vue'

describe('UvInputGroup', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInputGroup, { props: { label: 'Input Group', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Input Group')
    expect(wrapper.find('[data-uv-component=UvInputGroup]').exists()).toBe(true)
    await wrapper.get('input').setValue('42')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
