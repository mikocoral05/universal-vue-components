import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvSkipLink from './UvSkipLink.vue'
describe('UvSkipLink',()=>{it('targets and reports the main landmark',async()=>{const w=mount(UvSkipLink,{props:{href:'#content'}});expect(w.get('a').attributes('href')).toBe('#content');await w.get('a').trigger('click');expect(w.emitted('activate')?.[0]).toEqual([{target:'#content'}])})})
