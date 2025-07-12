const { test, expect } = require('@playwright/test')

test.describe('Pokedex navigation', () => {
  test('can navigate to ivysaur page', async ({ page }) => {
    await page.goto('http://localhost:8080')
    await page.getByText('ivysaur').click()
    // ability names are lowercase in the source
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
