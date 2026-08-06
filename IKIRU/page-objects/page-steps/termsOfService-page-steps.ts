import { Page } from "@playwright/test";
import termOfServicePage from '../page-locators/termsOfService-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class TermOfServicePageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify Terms Of Service Text is displyed
    async verifyTermsOfServiceText(expectedText: string) {
        const actualText = await this.web.getText(termOfServicePage.TermsOfServiceText);
        await this.web.verifyValueContains(actualText, expectedText);
        await this.web.takeScreenshot('screenshots/verifyWarrantyText.png');
    }

    //Method to verify verify Terms Of Service URL
    async verifyTermsOfServiceURL(expectedUrl: string) {
        await this.web.verifyUrlContains(expectedUrl);
        await this.web.takeScreenshot('screenshots/verifyTermsOfServiceURL.png');
    }

    //Method to click on Privacy Policy
    async clickOnPrivacyPolicy() {
        await this.web.clickElement(termOfServicePage.PrivacyPolicyText);
        await this.web.takeScreenshot('screenshots/clickOnPrivacyPolicy.png');
    }

}