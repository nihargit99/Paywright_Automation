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
        await this.web.takeScreenshot('screenshots/launchApplication.png');
    }


    // Method to verify home page displayed after successful login
    async verifyHomePageDisplayed() {
        await this.web.isElementVisible(homePage.logo);
        await this.web.takeScreenshot('screenshots/homepage.png');
    }

    //Methods to click on SearchBox
    async verfiySerachBoxIsClicked() {
        await this.web.clickElement(homePage.searchBox)
        await this.web.takeScreenshot('screenshots/searchBoxClicked.png');
    }

    //Method to enter text on searchbox
    async enterSearchValue() {
        await this.web.enterText(homePage.searchBox, "Table Lamp")
        await this.web.takeScreenshot('screenshots/searchBoxTextEntered.png');
    }

    //Method to hit enter from the keyborad
    async pressEnter() {
        await this.web.pressKey("Enter")
        await this.web.takeScreenshot('screenshots/enterKeyPressed.png');
    }

    //Method to hover on Decor Option
    async hoverOnDecor() {
        await this.web.hoverOverElement(homePage.decor);
        await this.web.takeScreenshot('screenshots/decorHovered.png');
    }

    //Method to click on Wall paintings and wall
    async clickOnWallPaintingsAndWall() {
        await this.web.clickElement(homePage.wallPaintingsAndWalls)
        await this.web.takeScreenshot('screenshots/wallPaintingsAndWallsClicked.png');
    }

    //Method to hover on Furniture Option
    async hoverOnFurniture() {
        await this.web.hoverOverElement(homePage.furniture)
        await this.web.takeScreenshot('screenshots/furnitureHovered.png');
    }

    //Method to click on Dining Table Option
    async clickOnDiningTable() {
        await this.web.clickElement(homePage.diningTable)
        await this.web.takeScreenshot('screenshots/diningTableClicked.png');
    }

    //Method to hover on Kitchenware Option
    async hoverOnKitchenware() {
        await this.web.hoverOverElement(homePage.kitchenWare)
        await this.web.takeScreenshot('screenshots/kitchenwareHovered.png');
    }

    //Method to click on Cutlery Option
    async clickOnCutlery() {
        await this.web.clickElement(homePage.cutlery)
        await this.web.takeScreenshot('screenshots/cutleryClicked.png');
    }

    //Method to click on Cart Icon(top RIght corner)
    async clickOnCartIcon() {
        await this.web.clickElement(homePage.cartIcon)
        await this.web.takeScreenshot('screenshots/cartIconClicked.png');
    }

    //Method to click on Careers at IKIRU link
    async clickOnCareersAtIkiruLink() {
        await this.web.clickElement(homePage.carrierAtIkiruLink)
        await this.web.takeScreenshot('screenshots/careersAtIkiruClicked.png');
    }

    //Method to click on Powered By Shopify
    async clickOnPoweredByShopify(): Promise<Page> {
        const newPage = await this.web.clickElementAndWaitForNewTab(homePage.poweredByShopify);
        await newPage.screenshot({ path: 'screenshots/fillTheForm.png' });
        return newPage;
    }

    //Method to click on warranty And Cancellation
    async clickOnWarrantyAndCancellation() {
        await this.web.clickElement(homePage.warrantyAndCancellation);
        await this.web.takeScreenshot('screenshots/clickOnWarrantyAndCancellation.png');
    }

    //Method to click on Terms of service
    async clickOntermsOfService() {
        await this.web.clickElement(homePage.termsOfService);
        await this.web.takeScreenshot('screenshots/clickOntermsOfService.png');
    }


}