import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStepperForm from './UvStepperForm.vue'

describe('UvStepperForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvStepperForm, { props: { label: 'Stepper Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Stepper Form')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
