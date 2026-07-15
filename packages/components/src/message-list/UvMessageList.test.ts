import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMessageList from './UvMessageList.vue'

describe('UvMessageList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMessageList, { props: { label: 'Message List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Message List')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
