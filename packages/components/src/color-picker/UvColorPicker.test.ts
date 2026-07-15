import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UvColorPicker from './UvColorPicker.vue'
describe('UvColorPicker',()=>{it('selects swatches and reports invalid text',async()=>{const w=mount(UvColorPicker,{props:{swatches:['#ff0000']}});await w.get('button').trigger('click');expect(w.emitted('update:modelValue')?.[0]).toEqual(['#ff0000']);const text=w.get('input[type=text]');await text.setValue('bad');await text.trigger('change');expect(w.emitted('invalid')?.[0]?.[0]).toMatchObject({valid:false})})})
