import {test,expect} from "../fixtures/baseFixture.js"
import DirectoryPage from "../PageObjectModel/DirectoryPage.js"
import data from "../test-data/users.json"

test.describe("searchjob",()=>{

    test.beforeEach(async({loginpage})=>{
          await loginpage.navigate()
          await loginpage.login(data.validuser.username,data.validuser.password)

    })

    test.afterEach(async({logoutpage})=>{
        await logoutpage.logout()
    })

test("searchByJobTitle",async({page})=>{
          const dp = new DirectoryPage(page)
          await dp.dirSearch(data.job.jobb)

})
          


})