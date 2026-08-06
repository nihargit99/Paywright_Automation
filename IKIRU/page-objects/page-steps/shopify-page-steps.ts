import { Page } from "@playwright/test";
import shopifyPage from '../page-locators/shopify-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class ShopifyPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify the URL of new page
    async verifyNewPageUrl(expectedUrl: string) {
        await this.web.verifyUrlContains(expectedUrl);
        await this.web.takeScreenshot('screenshots/cutleryPage.png');
    }

    //Method to click on Start for free
    async clickOnStartForFree() {
        await this.web.clickElement(shopifyPage.startForFree);
        await this.web.takeScreenshot('screenshots/clickOnStartForFree.png');
    }

    //Method to verify page text
    async verifyStartYourFreeTrailText(expectedText: string) {
        const acrualText= await this.web.getText(shopifyPage.startYourFreeTrial);
        await this.web.verifyValueContains(acrualText,expectedText);
        await this.web.takeScreenshot('screenshots/verifyStartYourFreeTrailText.png');
    }

    //Method to verify Email filed is visiable
    async verifyEmailFiledIsVisible(){
        await this.web.isElementVisible(shopifyPage.mailFiled);
        await this.web.takeScreenshot('screenshots/verifyEmailFiledIsVisible.png');
    }

    //Method to click on continue with Email
    async clickOnContinueWithEmail(){
        await this.web.clickElement(shopifyPage.continueWithEmail);
        await this.web.takeScreenshot('screenshots/clickOnContinueWithEmail.png');
    }

    //Method to Navigate back to homePage





}