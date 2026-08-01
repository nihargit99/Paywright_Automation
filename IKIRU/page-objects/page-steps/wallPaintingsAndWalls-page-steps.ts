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
        await this.web.compareValues(actualPageText, expectPageText);
        await this.web.takeScreenshot('screenshots/wallPaintingsAndWallsPage.png');
    }

    //Method to click on Price filter 
    async clickOnPriceFilter() {
        await this.web.clickElement(wallPaintingsAndWallsPage.priceText);
        await this.web.takeScreenshot('screenshots/priceFilterClicked.png');
    }

    //Method to enter price
    async enterPrice(price: string) {
        await this.web.enterText(wallPaintingsAndWallsPage.priceFiled, price);
        await this.web.takeScreenshot('screenshots/priceEntered.png');
    }

    //Method to hit enter from the keyborad
    async pressEnter() {
        await this.web.pressKey("Enter");
        await this.web.takeScreenshot('screenshots/enterPressed.png');
    }

    //Method to click on Availability filter 
    async clickOnAvailabilityFilter() {
        await this.web.clickElement(wallPaintingsAndWallsPage.availabilityText);
        await this.web.takeScreenshot('screenshots/availabilityFilterClicked.png');
    }

    //Method to check inStock Checkbox
    async checkInStockCheckBox() {
        await this.web.clickElement(wallPaintingsAndWallsPage.InStockCheckBox);
        await this.web.takeScreenshot('screenshots/inStockCheckBoxChecked.png');
    }

    //Method to click on Sort by dropdown and select "Price, low to high"
    async SelectValueFromDowpdown(dropdownValue: string) {
        await this.web.selectOption(wallPaintingsAndWallsPage.sortBy,dropdownValue);
        await this.web.takeScreenshot('screenshots/sortByDropdownSelected.png');
    }

    //Method to click on Sort by dropdown and select "Best Selling"
    async SelectValueFromDowpdownAgain(dropdownValue2: string) {
        await this.web.selectOption(wallPaintingsAndWallsPage.sortBy,dropdownValue2);
        await this.web.takeScreenshot('screenshots/sortByDropdownSelected.png');
    }

    //Method to click on Comapre button
    async clickOnCompareButton(){
        await this.web.clickElement(wallPaintingsAndWallsPage.compareButton);
        await this.web.takeScreenshot('screenshots/compareButtonClicked.png');
    }

    //Method to verify clearALL link is visible
    async verifyClearAllLink(){
        await this.web.isElementVisible(wallPaintingsAndWallsPage.clearAllLink);
        await this.web.takeScreenshot('screenshots/clearAllLinkVisible.png');
    }

    //Method to verify number of Products are showing
    async verifyNumberOfProduct(){
        await this.web.isElementVisible(wallPaintingsAndWallsPage.numberOfProduct);
        await this.web.takeScreenshot('screenshots/numberOfProductVisible.png');
    }

    //Method to click on Clear All
    async clickOnClearALLButton(){
        await this.web.clickElement(wallPaintingsAndWallsPage.clearALLButton);
        await this.web.takeScreenshot('screenshots/clearAllButtonClicked.png');
    }
    


}