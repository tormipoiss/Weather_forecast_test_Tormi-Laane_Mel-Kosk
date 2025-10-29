import { test, expect } from '@playwright/test';

// Algseis: Ilmateate rakendus just käivitati esimest korda, midagi ei ole tehtud
// Tegevus: Klikatakse registreerimise nupule, kirjutatakse registreerimise andmed ja registreeritakse.
// Siis logitakse sisse registreeritud kasutajaga.
// Siis klikatakse "Shared link statistics" nupule
// Ootus: Pärast "Shared link statistics" klikkamist, midagi ei juhtu.

test('Shared link statistics with no shared links', async ({ page }) => {
    await page.goto('https://localhost:5001/');
    const registerButton = page.locator('css=.btn-primary').filter({ hasText: 'Register' })
    await expect(registerButton).toBeVisible()
    await registerButton.click()
    const usernameInput = page.locator('css=#Username')
    await expect(usernameInput).toBeVisible()
    const username = makeid(5)
    usernameInput.fill(username)
    const passwordInput = page.locator('css=#Password')
    await expect(passwordInput).toBeVisible()
    passwordInput.fill("Abc-1")
    const registerButton2 = page.locator('css=.btn-primary')
    await expect(registerButton2).toBeVisible()
    await registerButton2.click()
    await expect(page.locator('css=h1')).toHaveText("You have successfully registered your account, please log in with it")
    const loginButtonNav = page.locator('css=.nav-link').filter({ hasText: 'Login' })
    await expect(loginButtonNav).toBeVisible()
    await loginButtonNav.click()
    const usernameInput2 = page.locator('css=#Username')
    await expect(usernameInput2).toBeVisible()
    usernameInput2.fill(username)
    const passwordInput2 = page.locator('css=#Password')
    await expect(passwordInput2).toBeVisible()
    passwordInput2.fill("Abc-1")
    const loginButton = page.locator('css=.btn-primary')
    await expect(loginButton).toBeVisible()
    await loginButton.click()
    const sharedLinkStatisticsNav = page.locator('css=.nav-link').filter({ hasText: 'Shared link statistics' })
    await expect(sharedLinkStatisticsNav).toBeVisible()
    await sharedLinkStatisticsNav.click()
    await expect(page.locator('css=h1')).toHaveText("Welcome to the weather forecast app")
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