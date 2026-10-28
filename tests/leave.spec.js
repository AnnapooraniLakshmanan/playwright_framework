import {test,expect} from "../fixtures/baseFixture.js"
import LeavePage from "../PageObjectModel/LeavePage.js"
import data from "../test-data/users.json"

test.describe("leave",()=>{
    test.beforeEach(async({loginpage})=>{
        await loginpage.navigate()
        await loginpage.login(data.validuser.username,data.validuser.password)
    })

    test.afterEach(async({logoutpage})=>{
        await logoutpage.logout()
    })

    test.only("apply-leave",async({page})=>{
        let lp=new LeavePage(page)
        await lp.applyLeave(data.applyleave.empname,data.applyleave.fromdate,data.applyleave.todate)
        
    })

})