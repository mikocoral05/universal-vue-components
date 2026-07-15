import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvDescriptionList from './UvDescriptionList.vue'
describe('UvDescriptionList',()=>{it('renders visible term-description pairs',()=>{const w=mount(UvDescriptionList,{props:{items:[{term:'Package',description:'Vue'},{term:'Hidden',description:'No',hidden:true}],label:'Package details'}});expect(w.get('section').attributes('aria-label')).toBe('Package details');expect(w.findAll('dt')).toHaveLength(1);expect(w.text()).toContain('Vue')})})
