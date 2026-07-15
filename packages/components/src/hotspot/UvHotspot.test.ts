import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHotspot from './UvHotspot.vue'

describe('UvHotspot', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvHotspot, { props: { label: 'Hotspot', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Hotspot')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
