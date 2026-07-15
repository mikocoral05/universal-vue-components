import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvApiResponse from './UvApiResponse.vue'

describe('UvApiResponse', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvApiResponse, { props: { label: 'API Response', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('API Response')
    expect(wrapper.find('[data-uv-component=UvApiResponse]').exists()).toBe(true)
  })
})
