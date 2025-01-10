import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_methods/common/CommonPage";
import { CommonScenario } from "../../base_methods/common/CommonScenario";
import { locators } from "./DashBoardLocators";
import { Console } from "console";

export class DashboardPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async verifyTheLandingPage(user_name) {
        const userNameDashBoard = this.page.locator(locators.userPageHeader).textContent;
        console.log(userNameDashBoard);
        const companyLogo = this.page.locator(locators.siteLogo).isVisible;
        expect(userNameDashBoard, "Hello, "+user_name).toBeTruthy();
        expect(companyLogo).toBeTruthy;
        
    }

   
}
