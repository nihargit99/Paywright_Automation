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

    //Method to increase window size
    async setWindowSize(){
        await this.web.setResolution(1920,1080)
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
    async enterSearchValue() {
        await this.web.enterText(homePage.searchBox, "Table Lamp")
    }

    //Method to hit enter from the keyborad
    async pressEnter() {
        await this.web.pressKey("Enter")
    }

    //Method to hover on Decor Option
    async hoverOnDecor() {
        await this.web.hoverOverElement(homePage.decor)
    }

    //Method to click on Wall paintings and wall
    async clickOnWallPaintingsAndWall() {
        await this.web.clickElement(homePage.wallPaintingsAndWalls)
    }

    //Method to hover on Furniture Option
    async hoverOnFurniture() {
        await this.web.hoverOverElement(homePage.furniture)
    }

        //Method to click on Dining Table Option
    async clickOnDiningTable() {
        await this.web.clickElement(homePage.diningTable)
    }
  
}