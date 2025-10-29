import { test, expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';

/*
 * Algseis: kontot pole
 * Tegevus: konto loomine ja mitme päeva ilmateade
 * Ootus: konto on loodud ja piisavalt on päevi näidatud
 */

test.beforeEach(async ({ page }) => {
    await page.goto("https://localhost:5001/Account/Register");
    let username = uuidv4()
    await page.locator("#Username").fill(username);
    await page.locator("#Password").fill("asd@sd1A");
    await page.getByRole('button', { name: 'Register' }).click();

    await page.goto("https://localhost:5001/Account/Login");
    await page.locator("#Username").fill(username);
    await page.locator("#Password").fill("asd@sd1A");
    await page.getByRole('button', { name: 'Login' }).click();

    await page.goto('https://localhost:5001/');
    await expect(page).toHaveURL("https://localhost:5001/");
});

test('saab vaadata mitme päeva ilmateadet', async ({ page }) => {
    await page.goto('https://localhost:5001/');
    await page.locator("#cityNameInput").fill("Tallinn")
    await page.locator("#DayAmount").fill("5")
    await page.getByRole('button',{name:"Search multiple days"}).click();
    const tableLocator = await page.locator(`table[style*="border: 3px solid black; width: 400px;"]`);
    const count = await tableLocator.count()
    await expect(page).toHaveURL("https://localhost:5001/Home/City");
    await expect(count).toBe(5)
});