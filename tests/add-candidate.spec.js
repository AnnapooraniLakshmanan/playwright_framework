import {test,expect} from "../fixtures/baseFixture.js"
import RecruitmentPage from "../PageObjectModel/RecruitmentPage.js"
import data from "../test-data/users.json"


test("add-a-candidate",async({page,loginpage})=>{
          const rp = new RecruitmentPage(page)
          const rndm = Math.round(Math.random()*((200-100)+100)+1)
          await rp.addCandidate(data.addcandidate.fn+rndm,data.addcandidate.ln,data.addcandidate.email,data.addcandidate.contact)

})
