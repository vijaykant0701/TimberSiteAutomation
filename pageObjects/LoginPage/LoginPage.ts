import AxeBuilder from "@axe-core/playwright";
import { expect, Page, } from "@playwright/test";
import { CommonPage } from "../../base_methods/common/CommonPage";
import { CommonScenario } from "../../base_methods/common/CommonScenario";
import { testData } from "../../tests/testData";
import { locators } from "../LoginPage/LoginPageLocators";
import { kMaxLength } from "buffer";

export class LoginPage extends CommonPage {

  Constructor(Page: any, commonScenarioPage: any, context) {
    // ... constructor logic
  }
  async goTo() {

    await this.page.goto(testData.qa);
    await this.page.waitForLoadState('domcontentloaded');
    
  }

  async navigateToLoginPage() {
    await this.page.locator(locators.manageAccountButton).click();
    await this.page.locator(locators.logoutLink).click();
  }

  async validLogin(username, password) {
    //const Locators = locators(this.page);
    //this.Locator :LoginPageLocators;
    await this.page.locator(locators.userName).fill(testData.username);
    await this.page.locator(locators.password).fill(testData.password);
    await this.page.locator(locators.signInbutton).click();
  }
}