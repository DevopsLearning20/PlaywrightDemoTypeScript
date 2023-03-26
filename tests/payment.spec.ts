import { test } from '@playwright/test'
import { HomePage } from '../page-objects/HomePage'
import { LoginPage } from '../page-objects/LoginPage'
import { PaymentPage } from '../page-objects/PaymentPage'
import { Navbar } from '../page-objects/Navbar'

test.describe('New Payment', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let paymentPage: PaymentPage
  let navbar: Navbar

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    paymentPage = new PaymentPage(page)
    navbar = new Navbar(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')
    await loginPage.navigateToAccountSummary()
  })

  test('Should send new payment', async ({ page }) => {
    navbar.clickOnTab('Pay Bills')
    await paymentPage.createPayment()
    await paymentPage.assertSuccessMessage()
  })
})
