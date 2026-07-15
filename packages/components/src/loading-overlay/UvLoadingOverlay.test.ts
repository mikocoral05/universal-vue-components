import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLoadingOverlay from './UvLoadingOverlay.vue'

describe('UvLoadingOverlay', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLoadingOverlay, { props: { label: 'Loading Overlay', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Loading Overlay')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
