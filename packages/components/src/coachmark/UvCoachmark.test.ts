import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCoachmark from './UvCoachmark.vue'

describe('UvCoachmark', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCoachmark, { props: { label: 'Coachmark', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Coachmark')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
