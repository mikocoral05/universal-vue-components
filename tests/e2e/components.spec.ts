import { expect, test } from '@playwright/test'

test('search opens from keyboard and navigates', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+K' : 'Control+K')
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.getByLabel('Search query').fill('button')
  await page.getByRole('button', { name: /UvButton/ }).click()
  await expect(page).toHaveURL(/components\/button/)
})

test('native input preview is interactive', async ({ page }) => {
  await page.goto('/components/input')
  const input = page.getByLabel('Project name')
  await input.fill('Portable UI')
  await expect(input).toHaveValue('Portable UI')
})

test('custom elements register', async ({ page }) => {
  await page.goto('/playground/elements')
  await expect(page.locator('uv-button')).toBeVisible()
  await expect(page.locator('uv-slider')).toBeVisible()
  const tags = ['uv-button', 'uv-divider', 'uv-skeleton', 'uv-slider', 'uv-popover', 'uv-dropdown-menu']
  const registered = await page.evaluate((names) => names.every((name) => Boolean(customElements.get(name))), tags)
  expect(registered).toBe(true)
})

test('new native components are interactive', async ({ page }) => {
  await page.goto('/components/slider')
  const slider = page.getByLabel('Coverage')
  await slider.fill('80')
  await expect(slider).toHaveValue('80')

  await page.goto('/components/popover')
  await page.getByRole('button', { name: 'Why universal?' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
})
