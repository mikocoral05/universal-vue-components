import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvActivityFeed from './UvActivityFeed.vue'

describe('UvActivityFeed', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvActivityFeed, { props: { label: 'Activity Feed', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Activity Feed')
    await wrapper.get('[role=option]').trigger('click'); expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })
})
