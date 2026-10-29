import {test,expect} from "../fixtures/baseFixture.js"
import DirectoryPage from "../PageObjectModel/DirectoryPage.js"
import data from "../test-data/users.json"



test("searchByJobTitle",async({page})=>{
          await page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
          const dp = new DirectoryPage(page)
          await dp.dirSearch(data.job.jobb)

})
          

