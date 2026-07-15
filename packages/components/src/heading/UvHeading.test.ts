import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvHeading from './UvHeading.vue'

describe('UvHeading', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvHeading, { props: { label: 'Heading', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Heading')
    expect(wrapper.find('[data-uv-component=UvHeading]').exists()).toBe(true)
  })
})
