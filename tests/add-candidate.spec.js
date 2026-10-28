import {test,expect} from "../fixtures/baseFixture.js"
import RecruitmentPage from "../PageObjectModel/RecruitmentPage.js"
import data from "../test-data/users.json"

test.describe("add-candidate",()=>{

    test.beforeEach(async({loginpage})=>{
          await loginpage.navigate()
          await loginpage.login(data.validuser.username,data.validuser.password)

    })

    test.afterEach(async({logoutpage})=>{
        await logoutpage.logout()
    })

test("add-a-candidate",async({page})=>{
          const rp = new RecruitmentPage(page)
          const rndm = Math.round(Math.random()*((200-100)+100)+1)
          await rp.addCandidate(data.addcandidate.fn+rndm,data.addcandidate.ln,data.addcandidate.email,data.addcandidate.contact)

})

})