import {test as base} from "@playwright/test"
import LoginPage from "../PageObjectModel/LoginPage"
import LogoutPage from "../PageObjectModel/LogoutPage"
import data from "../test-data/users.json"

export const test = base.extend({

loginpage:async({page},use)=>{
const loginpage = new LoginPage(page)
const logoutpage=new LogoutPage(page)
await loginpage.navigate()
await loginpage.validlogin()
await use(loginpage)
await logoutpage.logout()
}
})
export { expect } from '@playwright/test';