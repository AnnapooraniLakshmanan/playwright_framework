import {test,expect} from "../fixtures/baseFixture.js"
import EmployeeListPage from "../PageObjectModel/EmployeeListPage.js"
import AddEmployeePage from "../PageObjectModel/AddEmployeePage.js"
import data from "../test-data/users.json"

test.describe("search-emp",()=>{

    test.beforeEach(async({loginpage})=>{
          await loginpage.navigate()
          await loginpage.login(data.validuser.username,data.validuser.password)

    })

    test.afterEach(async({logoutpage})=>{
        await logoutpage.logout()
    })

test("valid-emp-search",async({page})=>{
    test.slow()
    const ep = new EmployeeListPage(page)
    await ep.searchValidEmp(data.validemp)
})

test("invalid-emp-search",async({page})=>{
    test.slow()
    const ep = new EmployeeListPage(page)
    await ep.searchInvalidEmp(data.invalidemp)
    
})

test("resetBtnFunctionality",async({page})=>{
    test.slow()
    const ep = new EmployeeListPage(page)
    await ep.reset(data.validemp,data.empid)
    
})

test("emp search using empid",async({page})=>{
    test.slow()
    const ep = new EmployeeListPage(page)
    const ap = new AddEmployeePage(page)
    const rndm = Math.round(Math.random()*((200-100)+100)+1)
    const id = await ap.createEmpWithOnlyName(data.firstname+rndm,data.lastname)
    await ep.searchWithEmpID(id)
   
})

test("view personal details",async({page})=>{
    test.slow()
    const ep = new EmployeeListPage(page)
    await ep.viewEmployeeDetails(data.viewEmpDts.eidd,data.viewEmpDts.fn,data.viewEmpDts.ln)
   
})

})



