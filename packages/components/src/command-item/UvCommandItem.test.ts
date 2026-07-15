import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCommandItem from './UvCommandItem.vue'

describe('UvCommandItem', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCommandItem, { props: { label: 'Command Item', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Command Item')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
