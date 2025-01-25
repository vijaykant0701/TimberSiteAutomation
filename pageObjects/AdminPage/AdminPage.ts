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
        const nodes = this.page.locator('tr.MuiTableRow-root td').nth(1);

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
        await this.page.waitForTimeout(2000);
        await this.page.locator(locators.estimateRadioButton).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(locators.estimateDropdownButton).click();
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
    async addBreak() {
      await this.page.locator(locators.addBreak).click();
      await this.page.keyboard.press('Tab');
      await this.page.keyboard.press('Tab');
      const now = DateTime.now();
      const thirtyMinutesAhead = now.plus({ minutes: 30 });
      const breakDateTime = thirtyMinutesAhead.toFormat('MM/DD/YYYY hh:mm aa');
      const breakEndedTime = `${breakDateTime}`;
      await this.page.keyboard.press('Tab');
    }
    async clickSaveAndApprove() {
      await this.page.locator(locators.saveAndApproveButton).click();
    }

    async editDateTimeIn() {
      const dateTimeInput = this.page.locator(locators.dateTimeIn);
      const currentValue = await dateTimeInput.inputValue();
      const currentDateTime = DateTime.fromFormat(currentValue, 'MM/DD/YYYY hh:mm aa');
      const updatedDateTime = currentDateTime.plus({ minutes: 30 });
      const updatedValue = updatedDateTime.toFormat('MM/DD/YYYY hh:mm aa');
      await dateTimeInput.fill(updatedValue);
      const newValue = await dateTimeInput.inputValue();
      console.assert(newValue === updatedValue, 'Date/Time was not updated correctly');
    }
    async editDateTimeOut() {
      const dateTimeInput = this.page.locator(locators.dateTimeOut);
      const currentValue = await dateTimeInput.inputValue();
      const currentDateTime = DateTime.fromFormat(currentValue, 'MM/DD/YYYY hh:mm aa');
      const updatedDateTime = currentDateTime.plus({ minutes: 30 });
      const updatedValue = updatedDateTime.toFormat('MM/DD/YYYY hh:mm aa');
      await dateTimeInput.fill(updatedValue);
      const newValue = await dateTimeInput.inputValue();
      console.assert(newValue === updatedValue, 'Date/Time was not updated correctly');
    }

    async enterTextInNotes() {
      const labelLocator = this.page.locator(locators.txtNote).nth(0);
              labelLocator.fill('Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.')

    }
    async changeCostCode() {
      await this.page.locator(locators.changeCostCode).click();
              //await this.page.waitForTimeout(2000);
              await this.page.waitForTimeout(2000);
              await this.page.keyboard.press('Tab');
              await this.page.keyboard.type("Floo");
              await this.page.keyboard.press('ArrowDown');
              await this.page.keyboard.press('Enter');
              await this.page.waitForTimeout(2000);
    }

    async clickOnAddBreak() {
      await this.page.locator(locators.addBreak).click();
    }

    async selectBreakStartTime() {
    
        const dateTimeInput = this.page.locator(locators.breakStartTime);
        const currentValue = await dateTimeInput.inputValue();
        const currentDateTime = DateTime.fromFormat(currentValue, 'MM/DD/YYYY hh:mm aa');
        if (!currentDateTime.isValid) {
        throw new Error(`Invalid date/time format: ${currentValue}`);
        }
        const updatedDateTime = currentDateTime.set({ hour: 12, minute: 0, second: 0 });
        const updatedValue = updatedDateTime.toFormat('MM/DD/YYYY hh:mm aa');
        await dateTimeInput.fill(updatedValue);
        const newValue = await dateTimeInput.inputValue();
        console.assert(newValue === updatedValue, `Date/Time was not updated correctly. Expected: ${updatedValue}, Found: ${newValue}`);
        }

    async selectBreakEndTime() {
      const dateTimeInput = this.page.locator(locators.breakOutTime);
      const currentValue = await dateTimeInput.inputValue();
      const currentDateTime = DateTime.fromFormat(currentValue, 'MM/DD/YYYY hh:mm aa');
      const updatedDateTime = currentDateTime.set({ hour: 13, minute: 0, second: 0 });
      const updatedValue = updatedDateTime.toFormat('MM/DD/YYYY hh:mm aa');
      await dateTimeInput.fill(updatedValue);
      const newValue = await dateTimeInput.inputValue();
      console.assert(newValue === updatedValue, 'Date/Time was not updated correctly');
      }

  async selectLastMonthFromRange() {
    const timeInOutRangeDropdown = this.page.locator(locators.timeInOutRange);
    await timeInOutRangeDropdown.click();

    const rangeOption = this.page.locator(locators.dropdownOption, { hasText: 'Last month' });
    await rangeOption.click();
  }

  async selectProjectManager() {
    const projectManagerDropdown = this.page.locator(locators.projectManagerDropdown);
    await projectManagerDropdown.click();
    const dropDownOptions = this.page.locator(locators.dropdownOption, { hasText: 'Vijay K' });
    await dropDownOptions.click();
    const selectedValue = await projectManagerDropdown.inputValue();
    console.assert(selectedValue === 'Vijay K', 'Project Manager was not updated correctly');
  }

  async selectStatus() {
    const statusDropdown = this.page.locator(locators.statusDropdown).nth(1);
    await statusDropdown.click();

    const statusOption = this.page.locator(locators.dropdownOption, { hasText: 'Pending' });
    await statusOption.click();
  }

  async selectProject() {
    const projectDropdown = this.page.locator(locators.projectDropdown).nth(1);
    await projectDropdown.click();

    const projectOption = this.page.locator(locators.dropdownOption, { hasText: 'Project 1 Test' });
    await projectOption.click();
  }

  async selectWorkers() {
    const workersDropdown = this.page.locator(locators.workersDropdown).nth(2);
    await workersDropdown.click();

    const projectOption = this.page.locator(locators.dropdownOption, { hasText: 'Vijay K' });
    await projectOption.click();

    await workersDropdown.click();
    const projectOption2 = this.page.locator(locators.dropdownOption, { hasText: 'Jeff Reed' });
    await projectOption2.click();
  }
}
