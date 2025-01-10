import test, { expect } from "../base_methods/fixtures/baseTest"
import { TimeTrackerPage } from "../pageObjects/TimeTrackerPage/TimeTrackerPage";
import { testData } from "./testData";

test.describe('TC_003', () => {

  test("Verification of admin approval of field works", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);

    await adminPage.clickOnAdminTab();
    await adminPage.clickOnRecord();

    
  });
})
