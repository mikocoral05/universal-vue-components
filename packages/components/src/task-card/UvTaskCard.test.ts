import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTaskCard from './UvTaskCard.vue'

describe('UvTaskCard', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTaskCard, { props: { label: 'Task Card', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Task Card')
    expect(wrapper.find('[data-uv-component=UvTaskCard]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
