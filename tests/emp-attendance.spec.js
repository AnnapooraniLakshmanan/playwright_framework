import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"
import TimePage from "../PageObjectModel/TimePage.js"

test.describe("attendance",()=>{

    test.beforeEach(async({loginpage})=>{
        await loginpage.navigate()
        await loginpage.login(data.validuser.username,data.validuser.password)
    })

    test.afterEach(async({logoutpage})=>{
        await logoutpage.logout()
    })

    test("emp-attendance",async({page})=>{
        const tp=new TimePage(page)
        await tp.empAttendance(data.empattn.ename)

    })

    test("Invalidemp-attendance",async({page})=>{
        const tp=new TimePage(page)
        await tp.invalidEmpAttendance(data.invalidempattn.ename)

    })



})