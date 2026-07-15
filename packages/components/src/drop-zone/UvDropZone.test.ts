import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDropZone from './UvDropZone.vue'

describe('UvDropZone', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDropZone, { props: { label: 'Drop Zone', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Drop Zone')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
