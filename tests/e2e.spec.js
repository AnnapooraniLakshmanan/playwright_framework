import {test,expect} from "../fixtures/baseFixture.js"
import data from "../test-data/users.json"
import AddEmployeePage from "../PageObjectModel/AddEmployeePage.js"
import EmployeeListPage from "../PageObjectModel/EmployeeListPage.js"



    test("system testing",async({page,loginpage})=>{
        await expect(page).toHaveURL(/dashboard/)
        const ap = new AddEmployeePage(page)
        const rndm = Math.round(Math.random()*((200-100)+100)+1)
        const id = await ap.createEmpWithOnlyName(data.firstname+rndm,data.lastname)
        const ep = new EmployeeListPage(page)
        await ep.viewEmployeeDetails(id,data.firstname+rndm,data.lastname)

    })
