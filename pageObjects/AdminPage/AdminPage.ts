import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_methods/common/CommonPage";
import { CommonScenario } from "../../base_methods/common/CommonScenario";
import { locators } from "./AdmiPageLocators";
import { DateTime } from 'luxon'; 
import { testData } from "../../tests/testData";


export class AdminPage extends CommonPage {
    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }
    

    async searchOrderAndSelect() {
        let orderFound = false;
        await this.page.waitForSelector('tbody');
        for (const row of await this.page.locator(locators.rows).all()) {
            const matchrowOrderId = await row.locator("th").textContent();
            if (this.getValue("Cost Code")!.includes(matchrowOrderId!)) {
                await row.locator(locators.AdminTab).click();
                orderFound = true;
                break;
            }
        }
        expect(orderFound).toBeTruthy();
        this.takeScreenshot("Orders page");
    }

    async clickOnAdminTab() {
        await this.page.locator(locators.TimeTracking).click();
        await this.page.locator(locators.AdminTab).click();
        await this.page.waitForTimeout(5000);

    }

    async clickOnRecord() {
        const nodes = this.page.locator('.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeSmall.css-bn1r9u');

        // Get the count of matching nodes
        const nodeCount = await nodes.count();
        console.log(`Found ${nodeCount} matching nodes.`);
      
        // Click on the first node if it exists
        if (nodeCount > 0) {
          await nodes.first().click();
          await this.page.waitForTimeout(5000);
          console.log('Clicked on the first node.');
        } else {
          console.log('No matching nodes found.');
        }
    }

    async editTheRecord(){
        await this.page.locator(locators.dropdownArrow).fill('First estimate 1 test');
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.type("Floo");
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        const today = DateTime.now().toFormat('MM/dd/yyyy'); 
        const clockINTime = testData.clockIN; 
        const clockOutTime = testData.clockOut;
        const dateTimeValueClockIn = `${today} ${clockINTime}`; 
        const dateTimeValueClockOut=`${today} ${clockOutTime}`;
        const nodes = this.page.locator(locators.tableData);

        // Get the count of matching nodes
        const nodeCount = await nodes.count();
        console.log(`Found ${nodeCount} matching nodes.`);
      
        // Click on the first node if it exists
        if (nodeCount > 0) {
          await nodes.first().click();
          await this.page.waitForTimeout(5000);
          console.log('Clicked on the first node.');
        } else {
          console.log('No matching nodes found.');
        }

    }

}
