import {test,expect} from "../fixtures/baseFixture.js"


test("login through storedstate",async({page})=>{
            await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
            await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
 })
