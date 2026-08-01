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
        await this.web.compareValues(actualPageText, expectPageText)
    }

    //Method to verify product count content product
    async verifyProductCountDisplayed(expectedCount: string) {
        const actualCount = await this.web.getText(diningTable.prodCount);
        await this.web.verifyValueContains(actualCount, expectedCount);
    }

    //Method to click on the first product
    async clickOnFirstProduct() {
        await this.web.clickElement(diningTable.firstProduct);
    }

    //Method to click on the share icon
    async clickOnShareIcon() {
        await this.web.clickElement(diningTable.shareIcon);
    }

    //Method to verify share popup is displayed
    async verifySharePopupDisplayed(expectedText: string) {
        const shareIconText = await this.web.getText(diningTable.shareIconText);
        await this.web.verifyValueContains(shareIconText, expectedText);
    }

    //Method to click on the copy button
    async clickOnCopyButton() {
        await this.web.clickElement(diningTable.copyButton);
    }

    //Method to verify copied button text is displayed
    async verifyCopiedButtonText(expectedText: string) {
        const copiedButtonText = await this.web.getText(diningTable.copiedButtonText);
        await this.web.verifyValueContains(copiedButtonText, expectedText);
    }

    //Method to click on the close button
    async clickOnCloseButton() {
        await this.web.clickElement(diningTable.closeButton);
    }

    //Method to enter the pin code in the input field
    async enterPinCode(pinCode: string) {
        await this.web.enterText(diningTable.pinCode, pinCode);
    }

    //Method to click on the check button
    async clickOnCheckButton() {
        await this.web.clickElement(diningTable.checkButton);
    }

    //Method to clear the input field
    async clearInputField() {
        await this.web.enterText(diningTable.pinCode, "");
    }

    //Method to enter pinocode again
    async enterValidPinCode(pinCode: string) {
        await this.web.enterText(diningTable.pinCode, pinCode);
    }

    //Method to verify delivery message is displayed
    async verifyDeliveryMessage(expectedMessage: string) {
        const actualMessage = await this.web.getText(diningTable.deliveryMessage);
        await this.web.verifyValueContains(actualMessage, expectedMessage);
    }

}