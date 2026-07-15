import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCounter from './UvCounter.vue'

describe('UvCounter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCounter, { props: { label: 'Counter', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Counter')
    expect(wrapper.find('[data-uv-component=UvCounter]').exists()).toBe(true)
  })
})
