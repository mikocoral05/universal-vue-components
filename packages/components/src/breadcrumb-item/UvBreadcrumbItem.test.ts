import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBreadcrumbItem from './UvBreadcrumbItem.vue'

describe('UvBreadcrumbItem', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvBreadcrumbItem, { props: { label: 'Breadcrumb Item', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Breadcrumb Item')
    expect(wrapper.find('[data-uv-component=UvBreadcrumbItem]').exists()).toBe(true)
  })
})
