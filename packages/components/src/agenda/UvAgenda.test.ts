import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAgenda from './UvAgenda.vue'

describe('UvAgenda', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAgenda, { props: { label: 'Agenda', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Agenda')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
