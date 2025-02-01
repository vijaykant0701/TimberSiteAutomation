import { test, expect, Page } from "@playwright/test";
import { CommonScenario } from "./CommonScenario";


export class CommonPage {
    private dataMap = new Map();
    constructor(public page: Page, readonly scenario: CommonScenario) {
    }
    async takeScreenshot(name: string) {
        await this.scenario.takeScreenshot(name);
    }
}