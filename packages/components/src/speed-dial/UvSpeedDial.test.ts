import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSpeedDial from './UvSpeedDial.vue'

describe('UvSpeedDial', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSpeedDial, { props: { label: 'Speed Dial', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Speed Dial')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
