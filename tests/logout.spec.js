import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"
import LoginPage from "../PageObjectModel/LoginPage"
import LogoutPage from "../PageObjectModel/LogoutPage"

test("logout",async({page})=>{
    const loginpage = new LoginPage(page)
    const logoutpage=new LogoutPage(page)
    await loginpage.navigate()
    await loginpage.login(data.validuser.username,data.validuser.password)
    await logoutpage.preVerify()
    await logoutpage.logout()
    await logoutpage.postVerify()
})