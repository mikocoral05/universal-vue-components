import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvMetadataList from './UvMetadataList.vue'

describe('UvMetadataList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvMetadataList, { props: { label: 'Metadata List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Metadata List')
    expect(wrapper.find('[data-uv-component=UvMetadataList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
