import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {

    // Define selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly accountSummary: Locator

    //Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.submitButton = page.locator('text=Sign in')
        this.errorMessage = page.locator('.alert-error')
        this.accountSummary = page.locator('#account_summary_tab')
    }

    // Define login page methods

    async login(username: string, password: string) {
        
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.submitButton.click()
    }

    async navigateToAccountSummary() {

        await this.page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
        await this.accountSummary.isVisible()

    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText(
            'Login and/or password are wrong'
        )
    }

}