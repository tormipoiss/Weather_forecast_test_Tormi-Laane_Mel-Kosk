import { test, expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';

/*
 * Algseis: kontot pole
 * Tegevus: konto loomine ja nupu klikkamine ja tuleb õige asukoht
 * Ootus: konto on loodud ja näidatakse meile meie õige asukoht
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

test('IP järgi asukoha valimine', async ({ page }) => {
    await page.goto('https://localhost:5001/');
    await page.getByRole('button',{name:"Get my location"}).click();
    const place = await page.locator("#cityNameInput").inputValue();
    await expect(page).toHaveURL("https://localhost:5001/Home/City");
    await expect(place).toBe("Tallinn")
});