import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvMenubar from './UvMenubar.vue'
describe('UvMenubar',()=>{it('opens a menu and selects a command',async()=>{const w=mount(UvMenubar,{props:{items:[{id:'file',label:'File',children:[{id:'new',label:'New'}]}]}});await w.get('[aria-haspopup=menu]').trigger('click');await w.get('.uv-menubar__menu [role=menuitem]').trigger('click');expect(w.emitted('select')?.[0]?.[0]).toMatchObject({id:'new'})})})
