import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTokenField from './UvTokenField.vue'

describe('UvTokenField', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTokenField, { props: { label: 'Token Field', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Token Field')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
