import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProcessFlow from './UvProcessFlow.vue'

describe('UvProcessFlow', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProcessFlow, { props: { label: 'Process Flow', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Process Flow')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
