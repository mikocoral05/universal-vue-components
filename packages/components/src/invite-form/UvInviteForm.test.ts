import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvInviteForm from './UvInviteForm.vue'

describe('UvInviteForm', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvInviteForm, { props: { label: 'Invite Form', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Invite Form')
    expect(wrapper.find('[data-uv-component=UvInviteForm]').exists()).toBe(true)
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
