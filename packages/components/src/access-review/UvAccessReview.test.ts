import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvAccessReview from './UvAccessReview.vue'

describe('UvAccessReview', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvAccessReview, { props: { label: 'Access Review', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Access Review')
    expect(wrapper.find('[data-uv-component=UvAccessReview]').exists()).toBe(true)
  })
})
