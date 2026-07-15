import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSpotlight from './UvSpotlight.vue'

describe('UvSpotlight', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSpotlight, { props: { label: 'Spotlight', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Spotlight')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
