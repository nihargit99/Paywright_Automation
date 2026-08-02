import { Page } from "@playwright/test";
import curtleryPage from '../page-locators/curtlery-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";

export class CutleryPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //method to verify cutlery page
    async verifyCutleryPage(expectedCutlery: string) {
        const actualCutlery = await this.web.getText(curtleryPage.curtleryText)
        await this.web.verifyValueContains(actualCutlery, expectedCutlery)
        await this.web.takeScreenshot('screenshots/cutleryPage.png');
    }

    //Method to click on first product in cutlery page
    async clickOnFirstProduct() {
        await this.web.clickElement(curtleryPage.firstProduct);
        await this.web.takeScreenshot('screenshots/firstCutleryProduct.png');
    }

    //Method to click on "Need Any Help OR Want to buy this in bulk?"
    async clickOnNeedAnyHelpORWanttobuythisinbulk() {
        await this.web.clickElement(curtleryPage.needAnyHelp);
        await this.web.takeScreenshot('screenshots/NeedAnyHelpORWanttobuythisinbulk.png');
    }

    //Method to verify contact info is displayed
    async verifyContactInfoDisplayed(expectedContactInfo: string) {
        const actualContactInfo = await this.web.getText(curtleryPage.contactInfo)
        await this.web.verifyValueContains(actualContactInfo, expectedContactInfo)
        await this.web.takeScreenshot('screenshots/contactInfo.png');
    }

    //Method to click on "Please Fill the Form" and wait for the new tab.
    async clickOnPleaseFillTheForm(): Promise<Page> {
        const newPage = await this.web.clickElementAndWaitForNewTab(curtleryPage.fillTheForm);
        await newPage.screenshot({ path: 'screenshots/fillTheForm.png' });
        return newPage;
    }



}