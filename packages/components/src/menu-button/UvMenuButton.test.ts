import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMenuButton from './UvMenuButton.vue'

describe('UvMenuButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMenuButton, { props: { label: 'Menu Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Menu Button')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
