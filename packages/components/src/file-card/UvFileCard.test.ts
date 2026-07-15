import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFileCard from './UvFileCard.vue'

describe('UvFileCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFileCard, { props: { label: 'File Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('File Card')
    expect(wrapper.find('[data-uv-component=UvFileCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
