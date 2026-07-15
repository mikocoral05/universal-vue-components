import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCascader from './UvCascader.vue'

describe('UvCascader', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCascader, { props: { label: 'Cascader', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Cascader')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
