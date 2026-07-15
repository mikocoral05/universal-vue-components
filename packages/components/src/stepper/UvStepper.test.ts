import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStepper from './UvStepper.vue'

const steps = [{ id: 'details', label: 'Details' }, { id: 'review', label: 'Review' }, { id: 'publish', label: 'Publish' }]

describe('UvStepper', () => {
  it('marks the current step and emits browser-friendly detail', async () => {
    const wrapper = mount(UvStepper, { props: { modelValue: 'details', steps } })
    expect(wrapper.get('[aria-current="step"]').text()).toContain('Details')
    await wrapper.findAll('button')[1]!.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['review'])
    expect(wrapper.emitted('change')?.[0]?.[0]).toMatchObject({ value: 'review', index: 1 })
  })

  it('accepts JSON steps and blocks skipped linear steps', () => {
    const wrapper = mount(UvStepper, { props: { modelValue: 'details', stepsJson: JSON.stringify(steps), linear: true } })
    expect(wrapper.findAll('button')).toHaveLength(3)
    expect(wrapper.findAll('button')[2]!.attributes()).toHaveProperty('disabled')
  })
})
