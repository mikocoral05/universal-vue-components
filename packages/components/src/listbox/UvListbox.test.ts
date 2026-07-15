import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvListbox from './UvListbox.vue'
const options=[{label:'Vue',value:'vue'},{label:'React',value:'react'}]
describe('UvListbox',()=>{it('supports multiple selection',async()=>{const w=mount(UvListbox,{props:{options,modelValue:['vue'],multiple:true}});await w.findAll('[role=option]')[1].trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual([['vue','react']]);expect(w.get('[role=listbox]').attributes('aria-multiselectable')).toBe('true')})})
