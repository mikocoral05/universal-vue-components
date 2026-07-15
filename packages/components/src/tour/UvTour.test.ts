import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTour from './UvTour.vue'

describe('UvTour', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTour, { props: { label: 'Tour', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Tour')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
