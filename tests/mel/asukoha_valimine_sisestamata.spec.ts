import { test, expect } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';

/*
 * Algseis: kontot pole
 * Tegevus: konto loomine ja asukoha valimine ilma asukohata
 * Ootus: konto on loodud ja tuleb vea teade, et asukohta pole valitud
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

test('asukoha valimine ilma sisestamata', async ({ page }) => {
    await page.goto('https://localhost:5001/');
    await page.getByRole('button',{name:"Search specific day"}).click();
    await page.isVisible(`:text("The city name field is required.")`)
    await expect(page).toHaveURL("https://localhost:5001/Home/City");
});