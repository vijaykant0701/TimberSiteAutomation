import { Locator, Page } from "@playwright/test";

export const locators = {
   
    userName:'input[name="username"]',
    //eturn userName;
    password: 'input[name="password"]',
    signInbutton: 'button:has-text("Sign in")',
    manageAccountButton:'[data-testid="ManageAccountsOutlinedIcon"]',
    logoutLink:'div.MuiListItemText-root span.MuiTypography-root:has-text("Logout")'

}



