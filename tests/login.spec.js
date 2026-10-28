import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"

test.describe("login",()=>{
    test.beforeEach(async({page,loginpage})=>{
            await loginpage.navigate()
            await loginpage.verify()
    })


    test("valid login",async({page,loginpage})=>{
            await loginpage.login(data.validuser.username,data.validuser.password)
            await expect(page).toHaveURL(/dashboard/)
 })

 test("invalid login",async({page,loginpage})=>{
            await loginpage.login(data.invaliduser.username,data.invaliduser.password)
            await expect(page.getByText("Invalid credentials")).toBeVisible()
 })

 test.only("missing credentials",async({page,loginpage})=>{
            await loginpage.login("","")
            await expect(page.getByText("Required").first()).toBeVisible()
 })

})







