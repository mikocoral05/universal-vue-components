import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLoadMore from './UvLoadMore.vue'

describe('UvLoadMore', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLoadMore, { props: { label: 'Load More', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Load More')
    await wrapper.get('button').trigger('click'); expect(wrapper.emitted('change')).toBeTruthy()
  })
})
