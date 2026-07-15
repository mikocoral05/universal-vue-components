import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDisclosure from './UvDisclosure.vue'

describe('UvDisclosure', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvDisclosure, { props: { label: 'Disclosure', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Disclosure')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
