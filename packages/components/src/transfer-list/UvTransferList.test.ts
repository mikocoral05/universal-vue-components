import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvTransferList from './UvTransferList.vue'
const items=[{id:'vue',label:'Vue'},{id:'react',label:'React'}]
describe('UvTransferList',()=>{it('moves selected items to the target',async()=>{const w=mount(UvTransferList,{props:{items,modelValue:['vue']}});const source=w.get('[role=listbox][aria-label=Available]');await source.get('[role=option]').trigger('click');await w.get('[aria-label="Move selected to Selected"]').trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual([['vue','react']]);expect(w.emitted('change')?.[0]?.[0]).toMatchObject({direction:'to-target',moved:['react']})})})
