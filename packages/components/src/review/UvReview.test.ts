import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvReview from './UvReview.vue'

describe('UvReview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvReview, { props: { label: 'Review', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Review')
    expect(wrapper.find('[data-uv-component=UvReview]').exists()).toBe(true)
  })
})
