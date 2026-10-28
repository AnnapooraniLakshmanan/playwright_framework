import { expect } from "@playwright/test"

export class RecruitmentPage
{
constructor(page)
{
    this.page=page
    this.reclink=page.locator("//span[text()='Recruitment']")
    this.addBtn=page.locator(" //button[text()=' Add ']")
    this.fn=page.getByPlaceholder("First Name")
    this.ln=page.getByPlaceholder("Last Name")
    this.mail=page.locator("//label[text()='Email']/../following-sibling::div/input")
    this.contact=page.locator("//label[text()='Contact Number']/../following-sibling::div/input")
    this.resume=page.locator("//input[@type='file']")
    this.saveBtn=page.locator(" //button[text()=' Save ']")
    this.verify=page.locator("//label[text()='Name']/../following-sibling::div/p")
    this.candidates=page.locator("//a[text()='Candidates']")
    this.candidateName=page.locator("//input[@placeholder='Type for hints...']")
    this.list=page.locator("//div[@role='listbox']")
    this.searchBtn=page.locator("//button[text()=' Search ']")
    this.details=page.locator("//div[@role='cell']/div[text()]")
}

async addCandidate(firstname,lastname,email,cntct)
{
    await expect(this.reclink).toBeVisible()
    await this.reclink.click()
    await this.addBtn.click()
    await this.fn.fill(firstname)
    await this.ln.fill(lastname)
    await this.mail.fill(email)
    await this.contact.fill(cntct)
    await this.resume.setInputFiles("c:/Users/Dell/Downloads/Globus_School_Management_QA_Automation_FINAL_PRESENTATION_v2.pdf")
    await this.saveBtn.click()
    await this.page.waitForLoadState("networkidle")
    await expect(this.page).toHaveURL(/addCandidate/)
    await expect(this.verify).toHaveText(firstname+" "+lastname)
    await this.candidates.click()
    await this.candidateName.fill(firstname)
    await expect(this.list).toBeAttached()
    await this.page.getByText(firstname+" "+lastname).first().click()
    await this.searchBtn.click()
    let dtails = await this.details.allTextContents()
    console.log(dtails);
}
}



export default RecruitmentPage