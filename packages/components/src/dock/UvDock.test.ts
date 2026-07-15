import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDock from './UvDock.vue'

describe('UvDock', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDock, { props: { label: 'Dock', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Dock')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
