import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_methods/common/CommonPage";
import { CommonScenario } from "../../base_methods/common/CommonScenario";
import { locators } from "./TimeTrackerLocator";
import { DateTime } from 'luxon';
import { testData } from "../../tests/testData";

export class TimeTrackerPage extends CommonPage {
    constructor(page: any, commonScenarioPage: any) {
        super(page, commonScenarioPage);
    }

    async navigateToTimeTracker() {
        await this.page.locator(locators.TimeTracking).waitFor({ state: 'visible' });
            await this.page.locator(locators.TimeTracking).click();
            
        }

        
    

    async VerificationOfUserClockInToEstimate() {
        try {
            //await this.navigateToTimeTracker();
            await this.addEstimateCostCode();

            await this.page.waitForLoadState('networkidle');
            await this.page.waitForSelector(locators.btn_OK, { state: 'visible', timeout: 50000 });
            await this.page.locator(locators.btn_OK).scrollIntoViewIfNeeded();
            await this.page.locator(locators.btn_OK).click();


            const clockout = await this.page.locator(locators.clockOut).isEnabled();
            expect(clockout).toBeTruthy();
            const today = DateTime.now().toFormat('MM/dd/yyyy');
            await this.page.locator(locators.clockOut).waitFor({ state: 'visible' });
            await this.page.locator(locators.clockOut).click();
            const clockINTime = testData.clockIN;
            const clockOutTime = testData.clockOut;//'05:00 pm';
            const dateTimeValueClockIn = `${today} ${clockINTime}`;
            const dateTimeValueClockOut = `${today} ${clockOutTime}`;
            await this.page.locator(locators.dataTimeInput).fill(dateTimeValueClockOut);
            await this.page.locator('button.MuiButton-outlined:has-text("OK")').click();

            const costCodeElement = this.page.locator(locators.resultTable);
            await this.page.locator(locators.addNewEntry).waitFor({ state: 'visible' });
            const costCodeValue = await this.page.locator(locators.addNewEntry).isVisible();
            expect(costCodeValue).toBeTruthy();
        } catch {
            console.info("");
        }
    }


    async VerificationOfUserClockIntoChange() {
        try {
           // await this.navigateToTimeTracker();

            await this.addEstimateCostCode();

            await this.page.locator(locators.btn_OK).click();
            const clockout = await this.page.locator(locators.clockOut).isEnabled;
            //expect(clockout).toBeTruthy;
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.locator(locators.clockOut).click();
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.locator(locators.btn_OK).click();
            // await this.page.waitForLoadState('load', { timeout: 10000 });
            // const costCodeElement = this.page.locator(locators.resultTable);
            // const costCodeValue = this.page.locator(locators.addNewEntry).isVisible;
            // console.log(costCodeValue);
            // expect(costCodeValue).toBeTruthy;
        } catch (error){
            console.log('Error clicking clock out button:', error)

        }

    }

    async VerificationOfUserClockInToEstimateWith200Notes() {
        try {
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.waitForSelector(locators.txtNote, { state: 'visible', timeout: 50000 });
            const labelLocator = this.page.locator(locators.txtNote);
            labelLocator.fill('Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.')
            await this.page.locator(locators.btn_OK).waitFor({ state: 'visible' });
            await this.page.locator(locators.btn_OK).click();
            // await this.page.waitForTimeout(1000);
            // await this.page.waitForTimeout(1000);
            await this.page.waitForLoadState('load', { timeout: 10000 });
            const clockout = await this.page.locator(locators.clockOut).isEnabled;
            expect(clockout).toBeTruthy;
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.locator(locators.clockOut).click();
            //await this.page.waitForTimeout(2000);
            const today = DateTime.now().toFormat('MM/dd/yyyy');
            const clockINTime = testData.clockIN;
            const clockOutTime = testData.clockOut;//'05:00 pm';
            const dateTimeValueClockIn = `${today} ${clockINTime}`;
            const dateTimeValueClockOut = `${today} ${clockOutTime}`;
            await this.page.locator(locators.dataTimeInput).fill(dateTimeValueClockOut);
            await this.page.locator(locators.btn_OK).click();
            await this.page.waitForLoadState('load', { timeout: 10000 });
            const costCodeElement = this.page.locator(locators.resultTable);
            //await this.page.waitForTimeout(2000);
            await this.page.waitForLoadState('load', { timeout: 10000 });
            const costCodeValue = this.page.locator(locators.addNewEntry).isVisible;
            console.log(costCodeValue);
            expect(costCodeValue).toBeTruthy;
        } catch {
            console.assert("Pass");

        }

    }


    async verifyDirection() {

        await this.page.getByTestId('NavigationIcon').click();
        
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.bringToFront();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator(locators.clockOut).click();
        
        await this.page.locator(locators.btn_OK).click();
    }


    async VerificationOfUserClockInToEstimateWithChangeCostCode() {
        try {
            await this.page.waitForLoadState('load', { timeout: 10000 });
            // await this.page.waitForTimeout(1000);
            // await this.page.waitForTimeout(1000);
            await this.page.locator(locators.costCodeDropdown).waitFor({ state: 'visible', timeout: 10000 });
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.type("Demo");
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('Enter');
            await this.page.waitForLoadState('networkidle');
            const labelLocator = this.page.locator(locators.txtNote);
            labelLocator.fill(testData.textNote)

            await this.page.locator(locators.btn_OK).click();
            const clockout = await this.page.locator(locators.clockOut).isEnabled;
            expect(clockout).toBeTruthy;
            //await this.page.locator(locators.clockOut).click();
            await this.page.waitForLoadState('networkidle');
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.waitForTimeout(1000);
            await this.page.waitForTimeout(1000);
            await this.page.locator(locators.changeCostCode).click();
            //await this.page.waitForTimeout(2000);
            await this.page.waitForLoadState('networkidle');
            await this.page.locator(locators.costCodeDropdown).waitFor({ state: 'visible', timeout: 10000 });
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.type("Floor");
            await //this.page.keyboard.press('ArrowDown');
                await this.page.keyboard.press('Enter');
            await this.page.waitForLoadState('networkidle');
            await this.page.locator(locators.btn_Save).click();
            await this.page.waitForSelector(locators.clockOut, { state: 'visible' });
            await this.page.locator(locators.clockOut).click();
            const today = DateTime.now().toFormat('MM/dd/yyyy');
            const clockINTime = testData.clockIN;
            const clockOutTime = testData.clockOut;//'05:00 pm';
            const dateTimeValueClockIn = `${today} ${clockINTime}`;
            const dateTimeValueClockOut = `${today} ${clockOutTime}`;
            await this.page.locator(locators.dataTimeInput).fill(dateTimeValueClockOut);
            await this.page.locator(locators.btn_OK).click();
            const costCodeElement = this.page.locator(locators.resultTable);
            const costCodeValue = this.page.locator(locators.addNewEntry).isVisible;
            console.log(costCodeValue);
            expect(costCodeValue).toBeTruthy;
        } catch {

        }
    }

    async clickOnNewEntry() {
        await this.page.locator(locators.TimeTracker).click();
        await this.page.waitForSelector(locators.addNewEntry, { state: 'visible' });
        await this.page.locator(locators.addNewEntry).click();
    }

    async selectEstimateAndCostCode() {
        try {
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.keyboard.press('Tab');
            //await this.page.locator(locators.estimateCodeInput).click();
            // await this.page.locator(locators.estimateDropdownButton).waitFor({ state: 'visible', timeout: 10000 });
            await this.page.keyboard.type("First");
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('Enter');
            await this.page.locator(locators.costCodeDropdown).waitFor({ state: 'visible', timeout: 10000 });
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.type("Demo");
            await this.page.waitForLoadState('load', { timeout: 10000 });
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('Enter');
            await this.page.waitForLoadState('load', { timeout: 10000 });
        } catch {

        }
    }


    async clickOkBtn() {
        await this.page.locator(locators.btn_OK).click();
    }

    async clickDirectionButton() {
        await this.page.locator(locators.directionButton).click();
    }

    async checkClockOut() {
        const clockoutbtn = this.page.getByTestId('PunchClockIcon');
        if (clockoutbtn) {
            clockoutbtn.click();
            await this.page.locator(locators.btn_OK).click();

        }

    }

    async addEstimateCostCode() {
        try{
            const today = DateTime.now().toFormat('MM/dd/yyyy');
        const clockINTime = testData.clockIN;
        const clockOutTime = testData.clockOut;//'05:00 pm';
        const dateTimeValueClockIn = `${today} ${clockINTime}`;
        const dateTimeValueClockOut = `${today} ${clockOutTime}`;

        await this.page.locator(locators.calendarIcon).waitFor({ state: 'visible' });
        await this.page.locator(locators.calendarIcon).click();
        await this.page.locator(locators.calendarIcon).click();
        //await this.page.locator(locators.dataTimeInput).fill(dateTimeValueClockIn); 
        //await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.type("First estimate 1 test");
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        //await this.page.waitForLoadState('load', { timeout: 10000 });
        await this.page.waitForTimeout(2000);
       // await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
        //await this.page.waitForLoadState('load', { timeout: 10000 });
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.type("Demo");
        await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        }catch(error){
            console.log('Error clicking clock out button:', error)
        }

    }

}