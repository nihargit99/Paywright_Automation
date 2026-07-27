import { Page } from "@playwright/test";
import homePage from '../page-locators/home-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";
import config from '../../config/config.json' with {type: 'json'};

export class HomePageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to launch the application
    async launchApplication() {
        await this.web.launchApplication(config.app.url, config.app.title);
    }
    // Method to verify home page displayed after successful login
    async verifyHomePageDisplayed() {
        await this.web.isElementVisible(homePage.logo);
    }

    //Methods to click on SearchBox
    async verfiySerachBoxIsClicked() {
        await this.web.clickElement(homePage.searchBox)
    }

    //Method to enter text on searchbox
    async enterSearchValue(){
        await this.web.enterText(homePage.searchBox,"Table Lamp")
    }
    
    //Method to hit enter from the keyborad
    async pressEnter(){
        await this.web.pressKey("Enter")
    }

}