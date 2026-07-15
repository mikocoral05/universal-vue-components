import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvSegmentedControl from './UvSegmentedControl.vue'
describe('UvSegmentedControl',()=>{it('selects an option with radio semantics',async()=>{const w=mount(UvSegmentedControl,{props:{modelValue:'grid',options:[{label:'Grid',value:'grid'},{label:'List',value:'list'}]}});await w.findAll('button')[1].trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual(['list']);expect(w.findAll('button')[0].attributes('role')).toBe('radio')})})
