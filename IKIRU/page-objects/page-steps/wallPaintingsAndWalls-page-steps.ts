import { Page } from "@playwright/test";
import wallPaintingsAndWallsPage from '../page-locators/wallPaintingsAndWalls-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class WallPaintingsAndWalls {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify Wall Paintings And Walls page is displayed
    async verifyWallPaintingsAndWallsPage(expectPageText: string) {
        const actualPageText = await this.web.getText(wallPaintingsAndWallsPage.wallPaintingsAndWallsText);
        await this.web.compareValues(actualPageText, expectPageText)
    }

    //Method to click on Price filter 
    async clickOnPriceFilter() {
        await this.web.clickElement(wallPaintingsAndWallsPage.priceText)
    }

    //Method to enter price
    async enterPrice(price: string) {
        await this.web.enterText(wallPaintingsAndWallsPage.priceFiled, price)
    }

    //Method to hit enter from the keyborad
    async pressEnter() {
        await this.web.pressKey("Enter")
    }

    //Method to click on Availability filter 
    async clickOnAvailabilityFilter() {
        await this.web.clickElement(wallPaintingsAndWallsPage.availabilityText)
    }

    //Method to check inStock Checkbox
    async checkInStockCheckBox() {
        await this.web.clickElement(wallPaintingsAndWallsPage.InStockCheckBox)
    }

    //Method to click on Sort by dropdown and select "Price, low to high"
    async SelectValueFromDowpdown(dropdownValue: string) {
        await this.web.selectOption(wallPaintingsAndWallsPage.sortBy,dropdownValue)
    }

    //Method to click on Sort by dropdown and select "Best Selling"
    async SelectValueFromDowpdownAgain(dropdownValue2: string) {
        await this.web.selectOption(wallPaintingsAndWallsPage.sortBy,dropdownValue2)
    }

    //Method to click on Comapre button
    async clickOnCompareButton(){
        await this.web.clickElement(wallPaintingsAndWallsPage.compareButton);
    }

    //Method to verify clearALL link is visible
    async verifyClearAllLink(){
        await this.web.isElementVisible(wallPaintingsAndWallsPage.clearAllLink);
    }

    //Method to verify number of Products are showing
    async verifyNumberOfProduct(){
        await this.web.isElementVisible(wallPaintingsAndWallsPage.numberOfProduct);
    }

    //Method to click on Clear All
    async clickOnClearALLButton(){
        await this.web.clickElement(wallPaintingsAndWallsPage.clearALLButton)
    }
    


}