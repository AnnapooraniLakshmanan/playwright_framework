import {test,expect} from "../fixtures/baseFixture.js"
import AddEmployeePage from "../PageObjectModel/AddEmployeePage.js"
import data from "../test-data/users.json"

test.describe("add-emp",()=>{

    test.beforeEach(async({loginpage})=>{
          await loginpage.navigate()
          await loginpage.login(data.validuser.username,data.validuser.password)

    })

    test.afterEach(async({logoutpage})=>{
        await logoutpage.logout()
    })

test("addEmpWithMissingCredentials",async({page})=>{
          const ap = new AddEmployeePage(page)
          await ap.errorValidation()

})
          

test("addEmpWithValidCredentials",async({page})=>{
          test.slow()
          const ap = new AddEmployeePage(page)
          const rndm = Math.round(Math.random()*((200-100)+100)+1)
          await ap.createEmployee(data.firstname+rndm,data.lastname,data.username+rndm,data.password)
         
})
})