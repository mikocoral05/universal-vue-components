import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFloatingActionButton from './UvFloatingActionButton.vue'

describe('UvFloatingActionButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFloatingActionButton, { props: { label: 'Floating Action Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Floating Action Button')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
