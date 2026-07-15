import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvEventList from './UvEventList.vue'

describe('UvEventList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvEventList, { props: { label: 'Event List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Event List')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
