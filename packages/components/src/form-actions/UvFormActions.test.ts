import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvFormActions from './UvFormActions.vue'

describe('UvFormActions', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvFormActions, { props: { label: 'Form Actions', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Form Actions')
    expect(wrapper.find('[data-uv-component=UvFormActions]').exists()).toBe(true)
  })
})
