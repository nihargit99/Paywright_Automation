import { Page } from "@playwright/test";
import curtlery1Page from '../page-locators/curtlery1-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class Cutlery1PageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);

    }

    //method to verify cutlery page url
    async verifyUrlContains(expectedUrl: string) {
        await this.web.verifyUrlContains(expectedUrl);
        await this.web.takeScreenshot('screenshots/cutleryPage.png');
    }

    //Method to verify cutlery page text
    async verifyCutleryPageText(expectedText: string) {
        const actualText = await this.web.getText(curtlery1Page.pageText);
        await this.web.verifyValueContains(actualText, expectedText);
        await this.web.takeScreenshot('screenshots/cutleryPageText.png');
    }

    //Method to close the cookie popup 
    async closeCookiePopup() {
        await this.web.clickElement(curtlery1Page.closeCookiePopup);
        await this.web.takeScreenshot('screenshots/closedCookiePopup.png');
    }

    //Method to enter name in the name field
    async enterName(name: string) {
        await this.web.enterText(curtlery1Page.nameField, name);
        await this.web.takeScreenshot('screenshots/enteredName.png');
    }

    //Method to enter phone number in the phone field
    async enterPhoneNumber(phoneNumber: string) {
        await this.web.enterText(curtlery1Page.phoneField, phoneNumber);
        await this.web.takeScreenshot('screenshots/enteredPhoneNumber.png');
    }

    //Method to enter email in the email field
    async enterEmail(email: string) {
        await this.web.enterText(curtlery1Page.emailField, email);
        await this.web.takeScreenshot('screenshots/enteredEmail.png');
    }

    //Method to enter quantity in the quantity field
    async enterQuantity(quantity: string) {
        await this.web.enterText(curtlery1Page.quantityField, quantity);
        await this.web.takeScreenshot('screenshots/enteredQuantity.png');
    }

    //Method to check the "Office" and "Home" checkbox
    async checkPurposeCheckboxes() {
        await this.web.clickElement(curtlery1Page.OfficeCheckbox);
        await this.web.clickElement(curtlery1Page.homeCheckbox);
        await this.web.takeScreenshot('screenshots/checkedPurposeCheckboxes.png');
    }

    //Method to select Done option from the status dropdown
    async selectStatusOption(option: string) {
        await this.web.clickElement(curtlery1Page.statusDropdown);
        await this.web.clickElement(curtlery1Page.doneOption);
        await this.web.takeScreenshot('screenshots/selectedStatusOption.png');
    }

    //Method to click on the submit button
    async clickSubmitButton() {
        await this.web.clickElement(curtlery1Page.submitButton);
        await this.web.takeScreenshot('screenshots/clickedSubmitButton.png');
    }

}