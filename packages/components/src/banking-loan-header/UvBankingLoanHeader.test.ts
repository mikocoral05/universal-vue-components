import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvBankingLoanHeader from './UvBankingLoanHeader.vue'

describe('UvBankingLoanHeader', () => {
  it('renders an accessible universal surface and exposes portable events', async () => {
    const wrapper = mount(UvBankingLoanHeader, { props: { label: 'Banking Loan Header', itemsJson: '[{"id":"one","label":"One"}]' } })
    expect(wrapper.attributes('data-uv-component') || wrapper.find('[data-uv-component]').attributes('data-uv-component')).toBe('UvBankingLoanHeader')
    expect(wrapper.text()).toContain('Banking Loan Header')
    const control = wrapper.find('button,input,select,textarea')
    if (control.exists()) {
      if (control.element instanceof HTMLInputElement || control.element instanceof HTMLTextAreaElement || control.element instanceof HTMLSelectElement) await control.setValue('updated')
      else await control.trigger('click')
      expect(wrapper.emitted('change') || wrapper.emitted('action')).toBeTruthy()
    }
  })
})
