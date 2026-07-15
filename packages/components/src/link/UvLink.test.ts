import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvLink from './UvLink.vue'
describe('UvLink',()=>{it('adds safe external behavior and emits navigation',async()=>{const w=mount(UvLink,{props:{href:'https://example.com',target:'_blank',external:true},slots:{default:'Docs'}});expect(w.get('a').attributes('rel')).toBe('noopener noreferrer');await w.get('a').trigger('click');expect(w.emitted('navigate')?.[0]?.[0]).toMatchObject({external:true})})})
