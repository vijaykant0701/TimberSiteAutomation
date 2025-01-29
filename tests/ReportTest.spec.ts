import test, { expect } from "../base_methods/fixtures/baseTest"
import { TimeTrackerPage } from "../pageObjects/TimeTrackerPage/TimeTrackerPage";
import { testData } from "./testData";

test.describe('TC_004', () => {

  test("Verification of admin downloading time report ", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await reportPage.clickOnReportTab();
    await reportPage.clickOnDownloads();
  });
})