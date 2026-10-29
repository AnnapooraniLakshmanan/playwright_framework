import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"
import TimePage from "../PageObjectModel/TimePage.js"



    test("emp-attendance",async({page,loginpage})=>{
        const tp=new TimePage(page)
        await tp.empAttendance(data.empattn.ename)

    })

    test("Invalidemp-attendance",async({page,loginpage})=>{
        const tp=new TimePage(page)
        await tp.invalidEmpAttendance(data.invalidempattn.ename)

    })


