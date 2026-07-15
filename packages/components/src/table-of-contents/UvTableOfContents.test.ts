import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvTableOfContents from './UvTableOfContents.vue'

describe('UvTableOfContents', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvTableOfContents, { props: { label: 'Table Of Contents', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Table Of Contents')
    expect(wrapper.find('[data-uv-component=UvTableOfContents]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
