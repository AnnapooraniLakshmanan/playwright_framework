import {expect} from "@playwright/test"

export class DirectoryPage
{
constructor(page)
{
    this.page=page
    this.dir=page.locator("//span[text()='Directory']")
    this.jobDrpdwn=page.locator("//label[text()='Job Title']/../following-sibling::div")
    this.list=page.locator("//div[@role='listbox']")
    this.search=page.locator("//button[text()=' Search ']")
    this.countt=page.locator("//div[@class='oxd-grid-4']/div")
}

async dirSearch(job)
{
    await expect(this.dir).toBeVisible()
    await this.dir.click()
    await this.jobDrpdwn.click()
    await expect(this.list).toBeVisible()
    await this.page.getByText(job).click()
    await this.search.click()
    console.log(await this.countt.count());
    await expect(this.page.locator(`//div[@class='oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card']/descendant::p[ .='${job}']`)).toHaveText(job)

    
}


}

export default DirectoryPage