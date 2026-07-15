import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvKanban from './UvKanban.vue'

describe('UvKanban', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvKanban, { props: { label: 'Kanban', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Kanban')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
