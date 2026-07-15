import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvLikeButton from './UvLikeButton.vue'

describe('UvLikeButton', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvLikeButton, { props: { label: 'Like Button', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Like Button')
    expect(wrapper.find('[data-uv-component=UvLikeButton]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('action')).toBeTruthy()
  })
})
