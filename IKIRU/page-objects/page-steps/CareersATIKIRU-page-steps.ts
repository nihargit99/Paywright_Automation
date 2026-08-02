import { Page } from "@playwright/test";
import CareersATIKIRUPage from '../page-locators/CareersATIKIRU-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class CareersATIKIRUPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //method to verify careers at ikiru page
    async verifyCareersATIKIRUPage(expectedPageText: string) {
        const actualPageText = await this.web.getText(CareersATIKIRUPage.pageText);
        await this.web.verifyValueContains(actualPageText, expectedPageText);
        await this.web.takeScreenshot('screenshots/careersATIKIRUPage.png');
    }

    //Method to hover on hamberger menu
    async hoverOnHambergerMenu() {
        await this.web.hoverOverElement(CareersATIKIRUPage.hambergerMenu);
        await this.web.takeScreenshot('screenshots/hoveredOnHambergerMenu.png');
    }

    //Method to click on Apply Now
    async clickOnapplyNow() {
        await this.web.clickElement(CareersATIKIRUPage.applyNowLink);
        await this.web.takeScreenshot('screenshots/clickOnapplyNow.png');
    }

    //Method to click on search Icon
    async clickOnSearchIcon() {
        await this.web.clickElement(CareersATIKIRUPage.searchIcon);
        await this.web.takeScreenshot('screenshots/clickOnSearchIcon.png');
    }

    //Method to search for Manager on searchBox
    async searchManager(searchItem:string){
        // await this.web.clickElement(CareersATIKIRUPage.searchBox);
        await this.web.enterText(CareersATIKIRUPage.searchBox, searchItem);
        await this.web.takeScreenshot('screenshots/searchManager.png');
    }

    //Method to click on firstItem
    async clickOnFirstItem(){
        await this.web.clickElement(CareersATIKIRUPage.clickOnFirstItem);
        
    }





}