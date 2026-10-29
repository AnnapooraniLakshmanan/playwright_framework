import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"



 test("invalid login",async({page})=>{
            await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
            await loginpage.invalidlogin(data.invaliduser.username,data.invaliduser.password)
            await expect(page.getByText("Invalid credentials")).toBeVisible()
 })

 test("missing credentials",async({page})=>{
            await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
            await loginpage.invalidlogin("","")
            await expect(page.getByText("Required").first()).toBeVisible()
 })








