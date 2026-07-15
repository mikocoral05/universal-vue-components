import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvPermissionMatrix from './UvPermissionMatrix.vue'

describe('UvPermissionMatrix', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvPermissionMatrix, { props: { label: 'Permission Matrix', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Permission Matrix')
    expect(wrapper.find('[data-uv-component=UvPermissionMatrix]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
