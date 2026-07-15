import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCallout from './UvCallout.vue'

describe('UvCallout', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCallout, { props: { label: 'Callout', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Callout')
    expect(wrapper.find('[data-uv-component=UvCallout]').exists()).toBe(true)
  })
})
