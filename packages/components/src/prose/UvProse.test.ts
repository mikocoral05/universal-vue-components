import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvProse from './UvProse.vue'

describe('UvProse', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvProse, { props: { label: 'Prose', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Prose')
    expect(wrapper.find('[data-uv-component=UvProse]').exists()).toBe(true)
  })
})
