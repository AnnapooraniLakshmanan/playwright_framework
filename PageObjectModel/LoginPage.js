import { expect } from '@playwright/test';
export class LoginPage
{
    constructor(page)
    {
      this.page=page
      this.username=page.getByPlaceholder("Username")
      this.password=page.getByPlaceholder("Password")
      this.loginbtn=page.getByRole("button",{name:" Login "})
    }

    async navigate()
    {
        await this.page.goto(`${process.env.BASE_URL}`+'/web/index.php/auth/login')
    }

    async validlogin()
    {
        
        await this.username.fill(`${process.env.ORANGEHRM_USERNAME}`)
        await this.password.fill(`${process.env.ORANGEHRM_PASSWORD}`)
        await this.loginbtn.click()
       

    }

    async invalidlogin(un,pwd)
    {
        
        await this.username.fill(un)
        await this.password.fill(pwd)
        await this.loginbtn.click()
       

    }

    async verify()
    {
        await expect(this.username).toBeVisible()
        await expect(this.password).toBeVisible()
        await expect(this.loginbtn).toBeVisible()            
    }

}

export default LoginPage