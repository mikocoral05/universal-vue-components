import AxeBuilder from '@axe-core/playwright'
import {expect,test} from '@playwright/test'
for(const route of ['/','/components','/components/input','/docs/installation','/playground'])test(`${route} has no serious accessibility violations`,async({page})=>{await page.goto(route);const results=await new AxeBuilder({page}).analyze();const blocking=results.violations.filter(v=>['serious','critical'].includes(v.impact??''));expect(blocking).toEqual([])})
