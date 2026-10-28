import {expect} from "@playwright/test"

export class EmployeeListPage
{
    constructor(page)
    {
        this.page=page
        this.pimlink=page.locator("//span[text()='PIM']")
        this.empinfo=page.getByText("Employee Information")
        this.empname=page.locator("//input[@placeholder='Type for hints...']")
        this.empList=page.locator("//div[@role='listbox']")
        this.firstEmp=page.locator("//div[@role='listbox']/div")
        this.srchBtn=page.getByRole("button",{name:" Search "})
        this.tablerow=page.locator("//div[@role='row']")
        this.norcrd=page.locator("//span[text()='No Records Found']")
        this.empid=page.locator("//div/input[@class='oxd-input oxd-input--active' and not(@placeholder='Search')]")
        this.empstatus=page.locator("//div[@class='oxd-select-wrapper']").first()
        this.sstatus=page.getByText("Full-Time Contract")
        this.jobtitle=page.locator("//div[@class='oxd-select-wrapper']").nth(2)
        this.jtitle=page.getByText("Account Assistant")
        this.subunit=page.locator("//div[@class='oxd-select-wrapper']").nth(3)
        this.sunit=page.getByText("Quality Assurance")
        this.resetBtn=page.getByRole("button",{name:" Reset "})
        this.personalDet=page.locator("//h6[text()='Personal Details']")
        this.fn=page.getByPlaceholder("First Name")
        this.ln=page.getByPlaceholder("Last Name")
    }

    async searchValidEmp(emp)
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(this.pimlink).toBeVisible()
        await this.pimlink.click()
        await expect(this.empinfo).toBeVisible()
        await this.empname.first().fill(emp)
        await expect(this.empList).toBeAttached({timeout: 10000})
        await expect(this.firstEmp.first()).toBeVisible({timeout: 10000});
        await this.firstEmp.first().click()
        await this.srchBtn.click()
        await expect(this.tablerow.first()).toBeVisible({timeout: 10000});
        const text = await (this.tablerow).nth(1).allTextContents()
        for (const element of text) {
            console.log(element);
        }
      }


    async searchInvalidEmp(emp)
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(this.pimlink).toBeVisible()
        await this.pimlink.click()
        await expect(this.empinfo).toBeVisible()
        await this.empname.first().fill(emp)
        await this.srchBtn.click()
        await expect(this.norcrd).toBeVisible()
}

    async reset(emp,eid)
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(this.pimlink).toBeVisible()
        await this.pimlink.click()
        await expect(this.empinfo).toBeVisible()
        await this.empname.first().fill(emp)
        await this.empid.fill(eid)
        await this.empstatus.click()
        await this.sstatus.click()
        await this.jobtitle.click()
        await this.jtitle.click()
        await this.subunit.click()
        await this.sunit.click()
        await this.resetBtn.click()
        await expect(this.empname.first()).toHaveValue("")
        await expect(this.empid).toHaveValue("")
      }

      async searchWithEmpID(eid)
    {
        await expect(this.pimlink).toBeVisible()
        await this.pimlink.click()
        await expect(this.empinfo).toBeVisible()
        await this.empid.fill(eid)
        await this.srchBtn.click()
        await expect(this.tablerow.first()).toBeVisible({timeout: 10000});
        const text = await (this.tablerow).nth(1).allTextContents()
        for (const element of text) {
            console.log(element);
        }
        
}

async  viewEmployeeDetails(eid,fn,ln)
    {
        await expect(this.pimlink).toBeVisible()
        await this.pimlink.click()
        await expect(this.empinfo).toBeVisible()
        await this.empid.fill(eid)
        await this.srchBtn.click()
        await this.page.getByText(fn+" "+ln).click()
        await expect(this.page).toHaveURL(/viewPersonalDetails/)
        await expect(this.personalDet).toBeVisible()
        await expect(this.fn).toHaveValue(fn)
        await expect(this.ln).toHaveValue(ln)
        await expect(this.page.getByText(fn+" "+ln)).toBeVisible()
        await this.pimlink.click()
         await expect(this.page).toHaveURL(/viewEmployeeList/)
     }

    }
export default EmployeeListPage