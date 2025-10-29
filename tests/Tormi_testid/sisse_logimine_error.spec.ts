import { test, expect } from '@playwright/test';

// Algseis: Ilmateate rakendus just käivitati esimest korda, midagi ei ole tehtud
// Tegevus: Klikatakse sisse logimise nupule, kirjutatakse suvalised sisse logimise andmed ja logitakse sisse.
// Ootus: Tekst mis ütleb, et sisse logimine ebaõnnestus.

test('Login with non existing user', async ({ page }) => {
    await page.goto('https://localhost:5001/');
    const loginButton = page.locator('css=.btn-primary').filter({ hasText: 'Login' })
    await expect(loginButton).toBeVisible()
    await loginButton.click()
    const usernameInput = page.locator('css=#Username')
    await expect(usernameInput).toBeVisible()
    usernameInput.fill(makeid(5))
    const passwordInput = page.locator('css=#Password')
    await expect(passwordInput).toBeVisible()
    passwordInput.fill("Abc-1")
    const loginButton2 = page.locator('css=.btn-primary')
    await expect(loginButton2).toBeVisible()
    await loginButton2.click()
    await expect(page.locator('css=h1')).toHaveText("Error: Username or password is incorrect")
});

function makeid(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}