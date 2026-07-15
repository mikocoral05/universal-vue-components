import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvThemeToggle from './UvThemeToggle.vue'

describe('UvThemeToggle', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvThemeToggle, { props: { label: 'Theme Toggle', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Theme Toggle')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
