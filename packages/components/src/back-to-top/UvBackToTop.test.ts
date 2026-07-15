import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBackToTop from './UvBackToTop.vue'

describe('UvBackToTop', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBackToTop, { props: { label: 'Back To Top', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Back To Top')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
