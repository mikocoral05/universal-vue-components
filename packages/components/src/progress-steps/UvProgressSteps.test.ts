import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProgressSteps from './UvProgressSteps.vue'

describe('UvProgressSteps', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProgressSteps, { props: { label: 'Progress Steps', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Progress Steps')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
