import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReducedMotion from './UvReducedMotion.vue'

describe('UvReducedMotion', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReducedMotion, { props: { label: 'Reduced Motion', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Reduced Motion')
    expect(wrapper.find('[data-uv-component=UvReducedMotion]').exists()).toBe(true)
  })
})
