import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvSplitButton from './UvSplitButton.vue'
describe('UvSplitButton',()=>{it('emits primary and menu actions',async()=>{const w=mount(UvSplitButton,{props:{modelValue:true,items:[{id:'copy',label:'Copy'}]}});await w.get('.uv-split-button__primary').trigger('click');await w.get('[role=menuitem]').trigger('click');expect(w.emitted('action')).toHaveLength(1);expect(w.emitted('select')?.[0]?.[0]).toMatchObject({id:'copy'})})})
