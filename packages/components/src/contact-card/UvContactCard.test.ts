import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvContactCard from './UvContactCard.vue'

describe('UvContactCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvContactCard, { props: { label: 'Contact Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Contact Card')
    expect(wrapper.find('[data-uv-component=UvContactCard]').exists()).toBe(true)
  })
})
