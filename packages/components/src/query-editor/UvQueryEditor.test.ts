import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvQueryEditor from './UvQueryEditor.vue'

describe('UvQueryEditor', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvQueryEditor, { props: { label: 'Query Editor', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Query Editor')
    expect(wrapper.find('[data-uv-component=UvQueryEditor]').exists()).toBe(true)
  })
})
