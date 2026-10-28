import {expect} from "@playwright/test"
export class LogoutPage
{
    constructor(page)
    {
        this.page=page
        this.profileicon=page.locator("//div[@class='oxd-topbar-header']/div/descendant::img")
        this.profiledrpdwn=page.locator("//ul[@class='oxd-dropdown-menu']")
        this.logoutbtn=page.getByRole("menuitem",{name:"Logout"})
    }

    
    async preVerify()
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

    async logout()
    {
        await this.profileicon.click()
        await expect(this.profiledrpdwn).toBeVisible()
        await this.logoutbtn.click()
    }

    async postVerify()
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

}

export default LogoutPage