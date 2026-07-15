import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvContainer from './UvContainer.vue'

describe('UvContainer', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvContainer, { props: { label: 'Container', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Container')
    expect(wrapper.find('[data-uv-component=UvContainer]').exists()).toBe(true)
  })
})
