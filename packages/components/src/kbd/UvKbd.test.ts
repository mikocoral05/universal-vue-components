import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvKbd from './UvKbd.vue'

describe('UvKbd', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvKbd, { props: { label: 'Kbd', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Kbd')
    expect(wrapper.find('[data-uv-component=UvKbd]').exists()).toBe(true)
  })
})
