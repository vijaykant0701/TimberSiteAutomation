import test, { expect } from "../base_methods/fixtures/baseTest"
//import { TimeTrackerPage } from "../pageObjects/TimeTrackerPage/TimeTrackerPage";
import { testData } from "./testData";

test.describe('TC_003', () => {
  
  test("Verification of admin approval of field works", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await adminPage.clickOnAdminTab();
    await adminPage.clickOnRecord();
    await adminPage.editTheRecord();
    await adminPage.addBreak();
    await adminPage.clickSaveAndApprove();
  });
})
test.describe('TC_011', () => {
  test("Verification of admin approval of field works time entry", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await adminPage.clickOnAdminTab();
    await adminPage.clickOnRecord();
    await adminPage.editTheRecord();
    await adminPage.editDateTimeIn();
    await adminPage.editDateTimeOut();
    await adminPage.clickSaveAndApprove();
  });

});
test.describe('TC_012', () => {
  test("User will add 200+ character note save and approve", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await adminPage.clickOnAdminTab();
    await adminPage.clickOnRecord();
    await adminPage.changeCostCode();
    await adminPage.enterTextInNotes();
    await adminPage.clickSaveAndApprove();
  });

});
test.describe('TC_013', () => {
  test("User will add break to existing entry, save and approve", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
    console.log("test start")
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await adminPage.clickOnAdminTab();
    await adminPage.clickOnRecord();
    await adminPage.clickOnAddBreak();
    await adminPage.selectBreakStartTime();
    await adminPage.selectBreakEndTime();
    await adminPage.clickSaveAndApprove();
  });

});

test.describe('TC_010', () => {
  test("User will utilize all available filters ", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await adminPage.clickOnAdminTab();
    await adminPage.selectLastMonthFromRange();
    await adminPage.selectProjectManager();
    await adminPage.selectStatus();
    await adminPage.selectProject();
    await adminPage.selectWorkers();
  });

});

