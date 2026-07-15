import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvStat from './UvStat.vue'
describe('UvStat',()=>{it('renders value and directional trend',()=>{const w=mount(UvStat,{props:{label:'Components',value:70,trend:5,trendDirection:'up',trendLabel:'this batch'}});expect(w.text()).toContain('70');expect(w.text()).toContain('this batch');expect(w.get('.uv-stat__trend').classes()).toContain('uv-stat__trend--up')})})
