import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDragHandle from './UvDragHandle.vue'

describe('UvDragHandle', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDragHandle, { props: { label: 'Drag Handle', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Drag Handle')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
