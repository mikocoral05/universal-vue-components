import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPageHeader from './UvPageHeader.vue'

describe('UvPageHeader', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPageHeader, { props: { label: 'Page Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Page Header')
    expect(wrapper.find('[data-uv-component=UvPageHeader]').exists()).toBe(true)
  })
})
