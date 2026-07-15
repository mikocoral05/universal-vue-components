import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvStorageMeter from './UvStorageMeter.vue'

describe('UvStorageMeter', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvStorageMeter, { props: { label: 'Storage Meter', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Storage Meter')
    expect(wrapper.find('[data-uv-component=UvStorageMeter]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
