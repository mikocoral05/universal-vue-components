import {expect,test} from '@playwright/test'
const routes=['/','/components','/components/button','/docs','/docs/installation','/docs/vue','/docs/web-components','/docs/cdn','/playground','/playground/elements','/roadmap','/community','/governance','/sponsors','/privacy','/security']
for(const route of routes)test(`${route} renders`,async({page})=>{await page.goto(route);await expect(page.locator('main')).toBeVisible();await expect(page).not.toHaveTitle(/404|error/i)})
