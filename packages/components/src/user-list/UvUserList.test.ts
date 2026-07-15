import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUserList from './UvUserList.vue'

describe('UvUserList', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUserList, { props: { label: 'User List', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('User List')
    expect(wrapper.find('[data-uv-component=UvUserList]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
