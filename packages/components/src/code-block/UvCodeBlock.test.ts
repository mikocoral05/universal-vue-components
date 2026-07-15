import { mount } from '@vue/test-utils'
import { describe,expect,it,vi } from 'vitest'
import UvCodeBlock from './UvCodeBlock.vue'
describe('UvCodeBlock',()=>{it('renders numbered highlighted lines and reports copy',async()=>{Object.assign(navigator,{clipboard:{writeText:vi.fn().mockResolvedValue(undefined)}});const w=mount(UvCodeBlock,{props:{code:'one\ntwo',lineNumbers:true,highlightLines:'2'}});expect(w.findAll('.uv-code-block__line')).toHaveLength(2);expect(w.findAll('.uv-code-block__line')[1].classes()).toContain('uv-code-block__line--highlight');await w.get('button').trigger('click');expect(w.emitted('copy')?.[0]?.[0]).toMatchObject({success:true})})})
