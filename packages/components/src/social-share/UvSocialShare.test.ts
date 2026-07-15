import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvSocialShare from './UvSocialShare.vue'

describe('UvSocialShare', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvSocialShare, { props: { label: 'Social Share', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Social Share')
    expect(wrapper.find('[data-uv-component=UvSocialShare]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
