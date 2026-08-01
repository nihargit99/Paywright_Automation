import { Page } from "@playwright/test";
import diningTable from '../page-locators/dining-table-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class DiningTableSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify dining table page is displayed
    async verifyDiningTablePage(expectPageText: string) {
        const actualPageText = await this.web.getText(diningTable.diningTableText);
        await this.web.compareValues(actualPageText, expectPageText);
        await this.web.takeScreenshot('screenshots/diningTablePage.png');
    }

    //Method to verify product count content product
    async verifyProductCountDisplayed(expectedCount: string) {
        const actualCount = await this.web.getText(diningTable.prodCount);
        await this.web.verifyValueContains(actualCount, expectedCount);
        await this.web.takeScreenshot('screenshots/productCount.png');
    }

    //Method to click on the first product
    async clickOnFirstProduct() {
        await this.web.clickElement(diningTable.firstProduct);
        await this.web.takeScreenshot('screenshots/firstProductClicked.png');
    }

    //Method to click on the share icon
    async clickOnShareIcon() {
        await this.web.clickElement(diningTable.shareIcon);
        await this.web.takeScreenshot('screenshots/shareIconClicked.png');
    }

    //Method to verify share popup is displayed
    async verifySharePopupDisplayed(expectedText: string) {
        const shareIconText = await this.web.getText(diningTable.shareIconText);
        await this.web.verifyValueContains(shareIconText, expectedText);
        await this.web.takeScreenshot('screenshots/sharePopupDisplayed.png');
    }

    //Method to click on the copy button
    async clickOnCopyButton() {
        await this.web.clickElement(diningTable.copyButton);
        await this.web.takeScreenshot('screenshots/copyButtonClicked.png');
    }

    //Method to verify copied button text is displayed
    async verifyCopiedButtonText(expectedText: string) {
        const copiedButtonText = await this.web.getText(diningTable.copiedButtonText);
        await this.web.verifyValueContains(copiedButtonText, expectedText);
        await this.web.takeScreenshot('screenshots/copiedButtonTextDisplayed.png');
    }

    //Method to click on the close button
    async clickOnCloseButton() {
        await this.web.clickElement(diningTable.closeButton);
        await this.web.takeScreenshot('screenshots/closeButtonClicked.png');
    }

    //Method to enter the pin code in the input field
    async enterPinCode(pinCode: string) {
        await this.web.enterText(diningTable.pinCode, pinCode);
        await this.web.takeScreenshot('screenshots/pinCodeEntered.png');
    }

    //Method to click on the check button
    async clickOnCheckButton() {
        await this.web.clickElement(diningTable.checkButton);
        await this.web.takeScreenshot('screenshots/checkButtonClicked.png');
    }

    //Method to clear the input field
    async clearInputField() {
        await this.web.enterText(diningTable.pinCode, "");
        await this.web.takeScreenshot('screenshots/inputFieldCleared.png');
    }

    //Method to enter pinocode again
    async enterValidPinCode(pinCode: string) {
        await this.web.enterText(diningTable.pinCode, pinCode);
        await this.web.takeScreenshot('screenshots/validPinCodeEntered.png');
    }

    //Method to verify delivery message is displayed
    async verifyDeliveryMessage(expectedMessage: string) {
        const actualMessage = await this.web.getText(diningTable.deliveryMessage);
        await this.web.verifyValueContains(actualMessage, expectedMessage);
        await this.web.takeScreenshot('screenshots/deliveryMessageDisplayed.png');
    }

}