import AxeBuilder from "@axe-core/playwright";
import test, { expect } from "../base_methods/fixtures/baseTest"
import { ReportPage } from "../pageObjects/ReportPage/ReportPage";
//import { POManager } from "../pageObjects/POManager"
import { testData } from "./testData";
import { DashboardPage } from "../pageObjects/DashBoardPage/DashBoardPage";
//import { expect } from "@playwright/test"
//import { test, expect, type Page } from '@playwright/test';

test.describe('TC_001', () => {
  console.log("Verification of user clock in to Estimate");
  test("TC_001", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();

    console.log(testData.qa)
    await loginPage.validLogin(testData.username, testData.password);
    await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
    await timeTrackerPage.navigateToTimeTracker();
    await timeTrackerPage.VerificationOfUserClockInToEstimate();
  });

});

test.describe('TC_002', () => {
  console.log("Verification of user clock into change order");
  test("TC_002", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();


    console.log(testData.qa)
    await loginPage.validLogin(testData.username, testData.password);
    await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
    await timeTrackerPage.navigateToTimeTracker();
    await timeTrackerPage.VerificationOfUserClockIntoChange();
  });

});

test.describe('TC_007', () => {
  console.log("Feild worker will clock into Job and leave a 200 + character  note ");
  test("TC_007", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
    await timeTrackerPage.navigateToTimeTracker();
    await timeTrackerPage.VerificationOfUserClockInToEstimateWith200Notes();
  });

});


test.describe('TC_008', () => {
  console.log("Feild worker will clock into approved estimate and change ");
  test("TC_008", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage }) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
    await timeTrackerPage.navigateToTimeTracker();
    await timeTrackerPage.VerificationOfUserClockInToEstimateWithChangeCostCode();
    //VerificationOfUserClockIntoChange
  });

});

test.describe('TC_009', () => {
  console.log("Field worker will clock in and use the directions feature");
  test("TC_009", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage }) => {
    console.log("test start")
    //await context.maximizeWindow();
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
    await timeTrackerPage.navigateToTimeTracker();
    await timeTrackerPage.clickOnNewEntry();
    await timeTrackerPage.selectEstimateAndCostCode();
    await timeTrackerPage.clickOkBtn();
    await timeTrackerPage.verifyDirectionButton();
    await timeTrackerPage.clickonClockOutButton();
  });

});
