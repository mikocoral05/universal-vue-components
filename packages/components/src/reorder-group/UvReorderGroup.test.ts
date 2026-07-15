import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReorderGroup from './UvReorderGroup.vue'

describe('UvReorderGroup', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReorderGroup, { props: { label: 'Reorder Group', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Reorder Group')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
