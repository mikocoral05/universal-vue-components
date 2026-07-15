import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvWarehouseOpsWorkflowTable from './UvWarehouseOpsWorkflowTable.vue'

describe('UvWarehouseOpsWorkflowTable', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvWarehouseOpsWorkflowTable, { props: { label: 'Warehouse Ops Workflow Table', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvWarehouseOpsWorkflowTable')
    expect(wrapper.text()).toContain('Warehouse Ops Workflow Table')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
