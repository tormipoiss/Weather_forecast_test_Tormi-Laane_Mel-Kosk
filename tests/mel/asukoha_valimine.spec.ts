import { test, expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';

/*
 * Algseis: kontot pole
 * Tegevus: konto loomine ja asukoha valimine
 * Ootus: konto on loodud ja saab asukohta valida ja asukoha valimine töötab
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

test('saab otsida asukohta', async ({ page }) => {
    await page.goto('https://localhost:5001/');
    await page.locator("#cityNameInput").fill("Tallinn")
    await page.getByRole('button',{name:"Search specific day"}).click();
    const place = await page.locator("#weatherAddress").textContent()
    await expect(page).toHaveURL("https://localhost:5001/Home/City");
    await expect(place).toBe("Tallinn")
});