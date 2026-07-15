import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommandBar from './UvCommandBar.vue'

describe('UvCommandBar', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCommandBar, { props: { label: 'Command Bar', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Command Bar')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
