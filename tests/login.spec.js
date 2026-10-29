import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"



 test("invalid login",async({page,loginpage})=>{
            await loginpage.login(data.invaliduser.username,data.invaliduser.password)
            await expect(page.getByText("Invalid credentials")).toBeVisible()
 })

 test("missing credentials",async({page,loginpage})=>{
            await loginpage.login("","")
            await expect(page.getByText("Required").first()).toBeVisible()
 })








