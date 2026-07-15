import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvToggleGroup from './UvToggleGroup.vue'
const options=[{label:'Bold',value:'bold'},{label:'Italic',value:'italic'}]
describe('UvToggleGroup',()=>{it('updates multiple selection',async()=>{const w=mount(UvToggleGroup,{props:{options,modelValue:['bold'],multiple:true}});await w.findAll('button')[1].trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual([['bold','italic']])})})
