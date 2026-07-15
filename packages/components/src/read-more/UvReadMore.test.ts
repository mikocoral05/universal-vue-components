import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReadMore from './UvReadMore.vue'

describe('UvReadMore', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReadMore, { props: { label: 'Read More', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Read More')
    await wrapper.get('button').trigger('click'); expect(wrapper.find('[role=dialog]').exists()).toBe(true)
  })
})
