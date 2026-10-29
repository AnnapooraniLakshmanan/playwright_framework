import {chromium,expect} from "@playwright/test"

async function globalSetup() {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
    await page.getByPlaceholder("Username").fill(`${process.env.ORANGEHRM_USERNAME}`)
    await page.getByPlaceholder("Password").fill(`${process.env.ORANGEHRM_PASSWORD}`)
    await page.getByRole("button",{name:" Login "}).click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.context().storageState({path:'playwright/.auth/auth.json'})
    await browser.close()
}

export default globalSetup