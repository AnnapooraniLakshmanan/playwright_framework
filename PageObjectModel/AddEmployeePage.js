import {expect} from "@playwright/test"
import { log } from "node:console"

export class AddEmployeePage
{
    constructor(page)
    {
        this.page=page
        this.pimlink=page.locator("//span[text()='PIM']")
        this.addEmp=page.getByRole("link",{name:"Add Employee"})
        this.firstname=page.getByPlaceholder("First Name")
        this.lastname=page.getByPlaceholder("Last Name")
        this.empid=page.locator("//input[@class='oxd-input oxd-input--active' and not(@placeholder='Search')]")
        this.plusBtnImg=page.locator("//input[@type='file']")
        this.togleBtn=page.locator(".oxd-switch-input")
        this.username=page.locator("//input[@class='oxd-input oxd-input--active']").nth(2)
        this.pswrd=page.locator("//input[@type='password']").first()
        this.cnfrmpswd=page.locator("//input[@type='password']").nth(1)
        this.saveBtn=page.getByRole("button",{name:" Save "})
        this.sbtn=page.getByRole("button",{name:" Save "}).first()
        this.errFn=page.locator("//input[@name='firstName']/../following-sibling::span[text()='Required']")
        this.errLn=page.locator("//input[@name='lastName']/../following-sibling::span[text()='Required']")
        this.verifyfn=page.getByPlaceholder("First Name")
        this.verifyln=page.getByPlaceholder("Last Name")
    
    }
    
    async errorValidation()
    {
        await this.pimlink.click()
        await this.addEmp.click()
        await this.saveBtn.click()
        await expect(this.errFn).toBeVisible()
        await expect(this.errLn).toBeVisible()
    }

    async createEmployee(fn,ln,un,pswd)
    {
        await this.pimlink.click()
        await this.addEmp.click()
        await this.firstname.fill(fn)
        await this.lastname.fill(ln)
        await this.plusBtnImg.setInputFiles("C:/Users/Dell/Pictures/searchbar.png")
        await expect(this.togleBtn).toBeVisible()
        await this.togleBtn.hover()
        await this.togleBtn.click({force:true})
        await expect(this.username).toBeVisible()
        await this.username.fill(un)
        await expect(this.pswrd).toBeVisible()
        await this.pswrd.fill(pswd)
        await this.cnfrmpswd.fill(pswd)
        await this.saveBtn.click()
        await this.page.waitForLoadState("networkidle")
        await expect(this.verifyfn).toHaveValue(fn)
        await expect(this.verifyln).toHaveValue(ln)
       }

    async createEmpWithOnlyName(fn,ln)
    {
        await this.pimlink.click()
        await this.addEmp.click()
        const id = await this.empid.inputValue()
        console.log(id);
        await this.firstname.fill(fn)
        await this.lastname.fill(ln)
        await this.saveBtn.click()
        await this.page.waitForLoadState("networkidle")
        await expect(this.page).toHaveURL(/viewPersonalDetails/)
        await expect(this.verifyfn).toHaveValue(fn)
        await expect(this.verifyln).toHaveValue(ln)
        return id
    }


}

export default AddEmployeePage