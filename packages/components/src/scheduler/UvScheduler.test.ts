import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvScheduler from './UvScheduler.vue'

describe('UvScheduler', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvScheduler, { props: { label: 'Scheduler', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Scheduler')
    expect(wrapper.find('[data-uv-component=UvScheduler]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
