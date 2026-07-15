import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvApiRequest from './UvApiRequest.vue'

describe('UvApiRequest', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvApiRequest, { props: { label: 'API Request', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('API Request')
    expect(wrapper.find('[data-uv-component=UvApiRequest]').exists()).toBe(true)
  })
})
