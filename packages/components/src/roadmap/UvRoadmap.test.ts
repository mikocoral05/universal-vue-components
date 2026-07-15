import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvRoadmap from './UvRoadmap.vue'

describe('UvRoadmap', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvRoadmap, { props: { label: 'Roadmap', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Roadmap')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
