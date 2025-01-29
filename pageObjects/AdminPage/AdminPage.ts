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
        //await this.page.waitForTimeout(2000);
        //await this.page.keyboard.press('ArrowDown');
        await this.page.waitForTimeout(2000);
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
      await this.page.waitForSelector(locators.addBreak, { timeout: 10000 }); 
      await this.page.locator(locators.addBreak).click();
      await this.page.waitForLoadState('domcontentloaded');
      //await this.page.keyboard.press('Tab');
      //await this.page.keyboard.press('Tab');
      const now = new Date();
    const futureTime = new Date(now.getTime() + 30 * 60 * 1000);
    const mm = String(futureTime.getMonth() + 1).padStart(2, '0'); 
    const dd = String(futureTime.getDate()).padStart(2, '0');
    const yyyy = futureTime.getFullYear();
    let hours = futureTime.getHours();
    const minutes = String(futureTime.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const hh = String(hours).padStart(2, '0');
    const formattedDateTime = `${mm}/${dd}/${yyyy} ${hh}:${minutes} ${ampm}`;
    console.log(`Formatted Date-Time (30 mins ahead): ${formattedDateTime}`);
    await this.page.fill(locators.breakOutTime, formattedDateTime);
    const enteredDateTime = await this.page.inputValue(locators.breakOutTime);
    console.log(`Entered Date-Time: ${enteredDateTime}`);

    }
    async clickSaveAndApprove() {
      await this.page.locator(locators.saveAndApproveButton).click();
    }

    async editDateTimeIn() {
      const dateTimeInput = this.page.locator(locators.dateTimeIn);
      const now = new Date();
    const futureTime = new Date(now.getTime() + 30 * 60 * 1000);
    const mm = String(futureTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(futureTime.getDate()).padStart(2, '0');
    const yyyy = futureTime.getFullYear();
    let hours = futureTime.getHours();
    const minutes = String(futureTime.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const hh = String(hours).padStart(2, '0');
    const formattedDateTime = `${mm}/${dd}/${yyyy} ${hh}:${minutes} ${ampm}`;
    console.log(`Formatted Date-time : ${formattedDateTime}`);
    await this.page.fill(locators.dateTimeIn, formattedDateTime);
    const enteredDateTime = await this.page.inputValue(locators.dateTimeIn);
    console.log(`Entered Date-Time: ${enteredDateTime}`);
    }
    async editDateTimeOut() {
      const dateTimeOut = this.page.locator(locators.dateTimeOut);
      const now = new Date();
    const futureTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
    const mm = String(futureTime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(futureTime.getDate()).padStart(2, '0');
    const yyyy = futureTime.getFullYear();
    let hours = futureTime.getHours();
    const minutes = String(futureTime.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const hh = String(hours).padStart(2, '0');
    const formattedDateTime = `${mm}/${dd}/${yyyy} ${hh}:${minutes} ${ampm}`;
    console.log(`Formatted Date-time : ${formattedDateTime}`);
    await this.page.fill(locators.dateTimeOut, formattedDateTime);
    const enteredDateTime = await this.page.inputValue(locators.dateTimeOut);
    console.log(`Entered Date-Time: ${enteredDateTime}`);
    }

    async enterTextInNotes() {
      const labelLocator = this.page.locator(locators.txtNote).nth(0);
              labelLocator.fill('Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.')

    }
    async changeCostCode() {
      await this.page.locator(locators.costCode).nth(5).click();
              //await this.page.waitForTimeout(2000);
              await this.page.waitForTimeout(2000);
              // await this.page.keyboard.press('Tab');
              // await this.page.keyboard.type("Floo");
              await this.page.keyboard.press('ArrowDown');
              await this.page.keyboard.press('Enter');
              await this.page.waitForTimeout(2000);
    }

    async clickOnAddBreak() {
      await this.page.locator(locators.addBreak).click();
    }

    async selectBreakStartTime() {
      const now = new Date();
      const mm = String(now.getMonth()+1).padStart(2, '0'); 
      const dd = String(now.getDate()).padStart(2, '0');
      const yyyy = now.getFullYear();
      const fixedTime = '12:00 PM';
      const formattedBreakStTime = `${mm}/${dd}/${yyyy} ${fixedTime}`;
      console.log(`Formatted Date-Time : ${formattedBreakStTime}`);
      await this.page.fill(locators.breakStartTime, formattedBreakStTime);
      await this.page.waitForTimeout(2000);
      const enteredBreakStartTime = await this.page.inputValue(locators.breakStartTime);
      await this.page.waitForTimeout(2000);
      console.log(`Entered Date-Time: ${enteredBreakStartTime}`);
    }
    async selectBreakEndTime() {
      const now = new Date();
      const mm = String(now.getMonth()+1).padStart(2, '0'); 
      const dd = String(now.getDate()).padStart(2, '0');
      const yyyy = now.getFullYear();
      const fixedTime = '13:00 PM';
      const formattedBreakOutTime = `${mm}/${dd}/${yyyy} ${fixedTime}`;
      console.log(`Formatted Date-Time : ${formattedBreakOutTime}`);
      await this.page.fill(locators.breakOutTime, formattedBreakOutTime);
      await this.page.waitForTimeout(2000);
      const enteredBreakOutTime = await this.page.inputValue(locators.breakOutTime);
      await this.page.waitForTimeout(2000);
      console.log(`Entered Date-Time: ${enteredBreakOutTime}`);
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
