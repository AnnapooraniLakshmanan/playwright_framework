import {expect} from "@playwright/test"

export class TimePage
{
    constructor(page)
    {
        this.page=page
        this.time=page.locator("//a[@href='/web/index.php/time/viewTimeModule']")
        this.timesheets=page.locator("//h6[text()='Timesheets']")
        this.att=page.locator("//h6[text()='Attendance']")
        this.attendance=page.locator("//span[text()='Attendance ']")
        this.list=page.locator("//ul[@role='menu']")
        this.emprcd=page.getByRole("menuitem",{name:"Employee Records"})
        this.ename=page.getByPlaceholder("Type for hints...")
        this.namelist=page.locator("//div[@role='listbox']")
        this.viewBtn=page.locator("//button[@type='submit' and text()=' View ']")
        this.verify=page.locator("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']")
       
    }

    async empAttendance(empname)
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(this.time).toBeVisible()
        await this.time.click()
        await this.attendance.click()
        await expect(this.list).toBeVisible()
        await this.emprcd.click()
        const pre = await this.verify.textContent()
        await this.ename.fill(empname)
        await expect(this.namelist).toBeVisible()
        await this.page.getByRole("option",{name:empname}).first().click()
        await this.viewBtn.click()
        const post = await this.verify.textContent()
        expect(pre).toBe(post)
       
    }

    async invalidEmpAttendance(empname)
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(this.time).toBeVisible()
        await this.time.click()
        await this.attendance.click()
        await expect(this.list).toBeVisible()
        await this.emprcd.click()
        await this.ename.fill(empname)
        await expect(this.namelist).toHaveText("No Records Found")
        console.log(await this.namelist.textContent());
        await this.viewBtn.click()
       
    }

    
}
export default TimePage