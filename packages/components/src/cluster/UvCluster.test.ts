import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvCluster from './UvCluster.vue'

describe('UvCluster', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvCluster, { props: { label: 'Cluster', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Cluster')
    expect(wrapper.find('[data-uv-component=UvCluster]').exists()).toBe(true)
  })
})
