import {test,expect} from "../fixtures/baseFixture.js"
import LeavePage from "../PageObjectModel/LeavePage.js"
import data from "../test-data/users.json"



    test("apply-leave",async({page})=>{
        await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
        let lp=new LeavePage(page)
        await lp.applyLeave(data.applyleave.empname,data.applyleave.fromdate,data.applyleave.todate)
        
    })
