import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_methods/common/CommonPage";
import { CommonScenario } from "../../base_methods/common/CommonScenario";
import { locators } from "./ReportPageLocators";
import * as fs from 'fs';
import * as path from 'path';
import { testData } from "../../tests/testData";


export class ReportPage extends CommonPage {

    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }


    async clickOnReportTab() {
        await this.page.locator(locators.TimeTracking).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(locators.ReportTab).click();
    }

    async clickOnDownloads() {
        await this.page.click('button:has-text("Save Report")');
        //a// 3. Handle the download event
        let downloadedFile;
        this.page.on('download', (download) => {
            downloadedFile = download;
        });

        // 4. Wait for the download to complete (with timeout)

        await Promise.race([
            new Promise<void>((resolve) => {
                const intervalId = setInterval(() => {
                    if (downloadedFile) {
                        clearInterval(intervalId);
                        resolve();
                    }
                }, 100); // Check every 100ms
            }),
            new Promise<void>((_, reject) => {
                setTimeout(() => {
                    reject(new Error('Download timed out'));
                }, 10000); // Timeout after 10 seconds
            }),
        ]);

        // 5. Extract the actual file name
        const downloadedFileName = downloadedFile.suggestedFilename();

        // 6. Determine the download path 
        let downloadPath;
        if (process.platform === 'darwin') {
            // macOS
            downloadPath = process.env.HOME + '/Downloads';
        } else if (process.platform === 'win32') {
            // Windows
            downloadPath = process.env.USERPROFILE + '\\Downloads';
        } else {
            // Linux
            downloadPath = '/home/' + process.env.USER + '/Downloads';
        }

        // 7. Save the downloaded file to the desired location
        const fullFilePath = downloadPath + '/' + downloadedFileName;
        await downloadedFile.saveAs(fullFilePath);
        console.log(downloadedFileName);
        // 7. Expected file name (optional)
        const expectedFileName = testData.hourlyDownloadReport;

        // 8. Validation: Downloaded file name (optional)
        if (expectedFileName) {
            expect(downloadedFileName).toBe(expectedFileName);
        }

        // 8. Read the downloaded file content
        const fileContent = await this.page.evaluate((filePath) => {
            return fetch(filePath)
                .then(response => response.text())
                .catch(error => {
                    console.error('Error reading file:', error);
                    return '';
                });
        }, fullFilePath);
    }

    async selectReportTypeHourly() {
        await this.page.locator(locators.typeDropdown).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: 'Hourly' }).click();
    }

    async selectReportTypeInvoice() {
        await this.page.locator(locators.typeDropdown).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: 'Invoice' }).click();
    }

    async clickOnDownloadsInvoice() {
        await this.page.click('button:has-text("Save Report")');
        //a// 3. Handle the download event
        let downloadedFile;
        this.page.on('download', (download) => {
            downloadedFile = download;
        });

        // 4. Wait for the download to complete (with timeout)

        await Promise.race([
            new Promise<void>((resolve) => {
                const intervalId = setInterval(() => {
                    if (downloadedFile) {
                        clearInterval(intervalId);
                        resolve();
                    }
                }, 100); // Check every 100ms
            }),
            new Promise<void>((_, reject) => {
                setTimeout(() => {
                    reject(new Error('Download timed out'));
                }, 10000); // Timeout after 10 seconds
            }),
        ]);

        // 5. Extract the actual file name
        const downloadedFileName = downloadedFile.suggestedFilename();

        // 6. Determine the download path 
        let downloadPath;
        if (process.platform === 'darwin') {
            // macOS
            downloadPath = process.env.HOME + '/Downloads';
        } else if (process.platform === 'win32') {
            // Windows
            downloadPath = process.env.USERPROFILE + '\\Downloads';
        } else {
            // Linux
            downloadPath = '/home/' + process.env.USER + '/Downloads';
        }

        // 7. Save the downloaded file to the desired location
        const fullFilePath = downloadPath + '/' + downloadedFileName;
        await downloadedFile.saveAs(fullFilePath);
        console.log(downloadedFileName);
        // 7. Expected file name (optional)
        const expectedFileName = testData.invoiceDownloadReport;

        // 8. Validation: Downloaded file name (optional)
        if (expectedFileName) {
            expect(downloadedFileName).toBe(expectedFileName);
        }

        // 8. Read the downloaded file content
        const fileContent = await this.page.evaluate((filePath) => {
            return fetch(filePath)
                .then(response => response.text())
                .catch(error => {
                    console.error('Error reading file:', error);
                    return '';
                });
        }, fullFilePath);


        // // 10. Optional: Clean up (delete the downloaded file)
        // await this.page.evaluate(() => {
        //     return fs.unlinkSync(fullFilePath); // Requires node:fs
        // });

    }
}

