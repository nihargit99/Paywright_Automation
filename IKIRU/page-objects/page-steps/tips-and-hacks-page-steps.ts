import { Page } from "@playwright/test";
import tipsAndHacksPage from '../page-locators/tips-and-hacks-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class TipsAndHacksPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //method to verify tips and hacks page
    async verifyTipsAndHacksPage(expectedTipsAndHacks: string) {
        const actualTipsAndHacks = await this.web.getText(tipsAndHacksPage.tipsAndHacksPageText)
        await this.web.verifyValueContains(actualTipsAndHacks, expectedTipsAndHacks)
        await this.web.takeScreenshot('screenshots/tipsAndHacksPage.png');
    }

    //Method to click on Read More button
    async clickOnReadMoreButton() {
        await this.web.clickElement(tipsAndHacksPage.readMoreButton);
        await this.web.takeScreenshot('screenshots/readMoreButtonClicked.png');
    }

    //Method to click on Home button and go back to Home page
    async clickOnHomeButton() {
        await this.web.clickElement(tipsAndHacksPage.homeButton);
        await this.web.takeScreenshot('screenshots/homeButtonClicked.png');
    }

    
    

}