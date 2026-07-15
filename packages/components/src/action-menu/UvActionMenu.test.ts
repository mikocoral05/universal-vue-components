import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvActionMenu from './UvActionMenu.vue'

describe('UvActionMenu', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvActionMenu, { props: { label: 'Action Menu', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Action Menu')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
