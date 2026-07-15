import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDropUpload from './UvDropUpload.vue'

describe('UvDropUpload', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDropUpload, { props: { label: 'Drop Upload', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Drop Upload')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
