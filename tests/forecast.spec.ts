import { test, expect } from '@playwright/test';

test('checkout kuni overview', async ({ page }) => {
    await page.goto('https://localhost:5001/');

    await expect(page).toHaveURL("https://localhost:5001/");
});