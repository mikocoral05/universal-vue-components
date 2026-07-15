import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFootnote from './UvFootnote.vue'

describe('UvFootnote', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFootnote, { props: { label: 'Footnote', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Footnote')
    expect(wrapper.find('[data-uv-component=UvFootnote]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
