import { test, expect } from '@playwright/test';

// Algseis: Ilmateate rakendus just käivitati esimest korda, midagi ei ole tehtud
// Tegevus: Klikatakse registreerimise nupule, kirjutatakse registreerimise andmed ja registreeritakse.
// Ootus: Tekst mis ütleb, et registreerimine õnnestus ja saab sisse logida.

test('Register', async ({ page }) => {
    await page.goto('https://localhost:5001/');
    const registerButton = page.locator('css=.btn-primary').filter({ hasText: 'Register' })
    await expect(registerButton).toBeVisible()
    await registerButton.click()
    const usernameInput = page.locator('css=#Username')
    await expect(usernameInput).toBeVisible()
    usernameInput.fill(makeid(5))
    const passwordInput = page.locator('css=#Password')
    await expect(passwordInput).toBeVisible()
    passwordInput.fill("Abc-1")
    const registerButton2 = page.locator('css=.btn-primary')
    await expect(registerButton2).toBeVisible()
    await registerButton2.click()
    await expect(page.locator('css=h1')).toHaveText("You have successfully registered your account, please log in with it")
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