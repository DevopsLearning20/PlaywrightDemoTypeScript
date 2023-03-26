import { test, expect } from '@playwright/test'

test.describe('Visual Regression Testing Example', () => {
      
    test('@Test Validate Home Page Page Snapshot', async ({ page }) => {
            await page.goto('http://zero.webappsecurity.com/index.html')
            expect(await page.screenshot()).toMatchSnapshot('Homepage.png')
    })

    test('@Test Validate Online Banking Page Snapshot', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/online-banking.html')
        expect(await page.screenshot()).toMatchSnapshot('OnlineBankingPage.png')
})

test('@Test Validate Feedback From Page Snapshot', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/feedback.html')
        expect(await page.screenshot()).toMatchSnapshot('FeedbackFrom.png')
})
})
  