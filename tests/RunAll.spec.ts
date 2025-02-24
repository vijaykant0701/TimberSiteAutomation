import AxeBuilder from "@axe-core/playwright";
import test, { expect } from "../base_methods/fixtures/baseTest"
import { ReportPage } from "../pageObjects/ReportPage/ReportPage";
//import { POManager } from "../pageObjects/POManager"
import { testData } from "./testData";
import { DashboardPage } from "../pageObjects/DashBoardPage/DashBoardPage";
//import { expect } from "@playwright/test"
//import { test, expect, type Page } from '@playwright/test';


//Validating the TimeTracking activity 
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
  test.describe('TC_001', () => {
    console.log("Verification of user clock in to Estimate");
    test("TC_001", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }) => {
      console.log("test start")
      //await context.maximizeWindow();
      try{
        await loginPage.goTo();
  
      console.log(testData.qa)
      await loginPage.validLogin(testData.username, testData.password);
      await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
      await timeTrackerPage.navigateToTimeTracker();
      await timeTrackerPage.clickOnNewEntry();
      await timeTrackerPage.VerificationOfUserClockInToEstimate();
      //await loginPage.navigateToLoginPage();
      }catch(message){
        console.log("pass");
      }
    });
  
  });
  
  test.describe('TC_002', () => {
    console.log("Verification of user clock into change order");
    test.only("TC_002", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }) => {
      try{
        console.log("test start")
      //await context.maximizeWindow();
      await loginPage.goTo();
  
  
      console.log(testData.qa)
      await loginPage.validLogin(testData.username, testData.password);
      await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
      await timeTrackerPage.navigateToTimeTracker();
      await timeTrackerPage.clickOnNewEntry();
      await timeTrackerPage.VerificationOfUserClockIntoChange();
      //await loginPage.navigateToLoginPage();
    }catch(message){
        console.log("pass");
      }
    });
  
  });

  test.describe('TC_007', () => {
    console.log("Feild worker will clock into Job and leave a 200 + character  note ");
    test.only("TC_007", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }) => {
      await loginPage.goTo();
      await loginPage.validLogin(testData.username, testData.password);
      await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
      await timeTrackerPage.navigateToTimeTracker();
      await timeTrackerPage.clickOnNewEntry();
      await timeTrackerPage.VerificationOfUserClockInToEstimateWith200Notes();
      //await loginPage.navigateToLoginPage();
    });
  
  });
  
  
  test.describe('TC_008', () => {
    console.log("Feild worker will clock into approved estimate and change ");
    test("TC_008", async ({ page, context, browser, loginPage, dashboardPage, timeTrackerPage }) => {
      await loginPage.goTo();
      await loginPage.validLogin(testData.username, testData.password);
      await dashboardPage.verifyTheLandingPage(testData.UserDashBoardName);
      await timeTrackerPage.navigateToTimeTracker();
      await timeTrackerPage.clickOnNewEntry();
      await timeTrackerPage.VerificationOfUserClockInToEstimateWithChangeCostCode();
      //await loginPage.navigateToLoginPage();
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

  test.describe('TC_004', () => {

    test("Verification of admin downloading time report ", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
      await loginPage.goTo();
      await loginPage.validLogin(testData.username, testData.password);
      await reportPage.clickOnReportTab();
      await reportPage.clickOnDownloads();
      //await loginPage.navigateToLoginPage();
    });
  })
  
  test.describe('TC_005', () => {
  
    test("Verification of admin downloading Hourly time report ", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
      await loginPage.goTo();
      await loginPage.validLogin(testData.username, testData.password);
      await reportPage.clickOnReportTab();
      await reportPage.selectReportTypeHourly();
      await reportPage.clickOnDownloads();
      //await loginPage.navigateToLoginPage();
    });
  })
  
  test.describe('TC_006', () => {
    test("Verification of admin downloading Invoice time report ", async ({ page, loginPage, dashboardPage, timeTrackerPage, reportPage, adminPage }, testinfo) => {
      await loginPage.goTo();
      await loginPage.validLogin(testData.username, testData.password);
      await reportPage.clickOnReportTab();
      await reportPage.selectReportTypeInvoice();
      await reportPage.clickOnDownloadsInvoice();
      //await loginPage.navigateToLoginPage();
    });
  })
  
  