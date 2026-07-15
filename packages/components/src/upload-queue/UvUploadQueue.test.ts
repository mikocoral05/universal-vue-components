import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvUploadQueue from './UvUploadQueue.vue'

describe('UvUploadQueue', () => {
  it('renders an accessible universal component surface', async () => {
    const wrapper = mount(UvUploadQueue, { props: { label: 'Upload Queue', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.text()).toContain('Upload Queue')
    expect(wrapper.find('[data-uv-component=UvUploadQueue]').exists()).toBe(true)
  })
})
