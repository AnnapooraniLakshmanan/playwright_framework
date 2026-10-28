import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"

test("logout",async({page,loginpage,logoutpage})=>{
    
    
    await loginpage.navigate()
    await loginpage.login(data.validuser.username,data.validuser.password)
    await logoutpage.preVerify()
    await logoutpage.logout()
    await logoutpage.postVerify()
})