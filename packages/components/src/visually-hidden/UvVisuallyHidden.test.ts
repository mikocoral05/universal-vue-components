import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvVisuallyHidden from './UvVisuallyHidden.vue'

describe('UvVisuallyHidden', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvVisuallyHidden, { props: { label: 'Visually Hidden', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Visually Hidden')
    expect(wrapper.find('[data-uv-component=UvVisuallyHidden]').exists()).toBe(true)
  })
})
