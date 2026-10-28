import {test as base} from "@playwright/test"
import LoginPage from "../PageObjectModel/LoginPage"
import LogoutPage from "../PageObjectModel/LogoutPage"

export const test = base.extend({

loginpage:async({page},use)=>{
const loginpage = new LoginPage(page)
await use(loginpage)
},

logoutpage:async({page},use)=>{
    const logoutpage=new LogoutPage(page)
    await use(logoutpage)
}
})
export { expect } from '@playwright/test';