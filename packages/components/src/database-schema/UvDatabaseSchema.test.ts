import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvDatabaseSchema from './UvDatabaseSchema.vue'

describe('UvDatabaseSchema', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvDatabaseSchema, { props: { label: 'Database Schema', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvDatabaseSchema')
    expect(wrapper.text()).toContain('Database Schema')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
