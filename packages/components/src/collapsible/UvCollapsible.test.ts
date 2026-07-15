import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvCollapsible from './UvCollapsible.vue'
describe('UvCollapsible',()=>{it('toggles content and reports state',async()=>{const w=mount(UvCollapsible,{props:{modelValue:false},slots:{default:'Hidden details'}});await w.get('button').trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual([true]);expect(w.emitted('change')?.[0]).toEqual([{open:true}])})})
