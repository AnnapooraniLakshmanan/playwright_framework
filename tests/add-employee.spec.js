import {test,expect} from "../fixtures/baseFixture.js"
import AddEmployeePage from "../PageObjectModel/AddEmployeePage.js"
import data from "../test-data/users.json"



test("addEmpWithMissingCredentials",async({page})=>{
          await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
          const ap = new AddEmployeePage(page)
          await ap.errorValidation()

})
          

test("addEmpWithValidCredentials",async({page})=>{
          test.slow()
          await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
          const ap = new AddEmployeePage(page)
          const rndm = Math.round(Math.random()*((200-100)+100)+1)
          await ap.createEmployee(data.firstname+rndm,data.lastname,data.username+rndm,data.password)
         
})
