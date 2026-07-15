import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvNavigationMenu from './UvNavigationMenu.vue'
const items=[{id:'docs',label:'Docs',children:[{id:'install',label:'Install',href:'/install'}]},{id:'about',label:'About',href:'/about'}]
describe('UvNavigationMenu',()=>{it('opens nested links and selects items',async()=>{const w=mount(UvNavigationMenu,{props:{items}});await w.get('button').trigger('click');expect(w.get('button').attributes('aria-expanded')).toBe('true');await w.get('.uv-navigation-menu__panel a').trigger('click');expect(w.emitted('select')?.[0]?.[0]).toMatchObject({id:'install'})})})
