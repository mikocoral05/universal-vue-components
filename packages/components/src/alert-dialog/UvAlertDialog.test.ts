import { mount } from '@vue/test-utils'
import { describe,expect,it } from 'vitest'
import UvAlertDialog from './UvAlertDialog.vue'
describe('UvAlertDialog',()=>{it('emits confirm and closes',async()=>{const w=mount(UvAlertDialog,{attachTo:document.body,props:{modelValue:true,title:'Delete item',returnValue:'42'}});await document.body.querySelectorAll('button')[1].dispatchEvent(new MouseEvent('click',{bubbles:true}));expect(w.emitted('confirm')?.[0]?.[0]).toMatchObject({action:'confirm',returnValue:'42'});expect(w.emitted('update:modelValue')?.[0]).toEqual([false]);w.unmount()})})
