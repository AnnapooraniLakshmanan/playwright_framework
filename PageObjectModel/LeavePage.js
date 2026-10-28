import { expect } from "@playwright/test";

export class LeavePage
{
    constructor(page)
    {
        this.page=page
        this.leavelink=page.locator("//span[text()='Leave']")
        this.assgnleave=page.getByText("Assign Leave")
        this.ename=page.getByPlaceholder("Type for hints...")
        this.list=page.locator("//div[@role='listbox']")
        this.leavetype=page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']")
        this.maternityLev=page.getByText("CAN - Matternity")
        this.warning=page.getByText("Balance not sufficient")
        this.fromdt=page.getByPlaceholder("yyyy-dd-mm").first()
        this.todt=page.getByPlaceholder("yyyy-dd-mm").nth(1)
        this.assgnbtn=page.locator("//button[@type='submit']")
        this.okBtn=page.getByRole("button",{name:" Ok "})

    }

    async applyLeave(en,frmdt,toodt)
    {
        await expect(this.leavelink).toBeVisible()
        await this.leavelink.click()
        await this.assgnleave.click()
        await this.ename.fill("an")
        await expect(this.list).toBeAttached()
        await this.page.getByText(en).first().click()
        await this.leavetype.click()
        await expect(this.maternityLev).toBeVisible()
        await this.maternityLev.click()
        await this.fromdt.fill(frmdt)
        await this.todt.clear()
        await this.todt.fill(toodt)
        //await expect(this.warning).not.toBeVisible()
        await expect(this.assgnbtn).toBeInViewport()
        await this.assgnbtn.click()
        await this.okBtn.click()
    }
}

export default LeavePage