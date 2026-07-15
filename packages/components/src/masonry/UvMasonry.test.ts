import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMasonry from './UvMasonry.vue'

describe('UvMasonry', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMasonry, { props: { label: 'Masonry', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Masonry')
    expect(wrapper.find('[data-uv-component=UvMasonry]').exists()).toBe(true)
  })
})
