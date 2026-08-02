import { Page } from "@playwright/test";
import cartPage from '../page-locators/cart-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class CartPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //method to verify cart page
    async verifycartPage(expectedCart: string) {
        const actualCart = await this.web.getText(cartPage.cartText)
        await this.web.verifyValueContains(actualCart, expectedCart)
        await this.web.takeScreenshot('screenshots/cartPage.png');
    }

    //Method to click and verify shipping link
    async clickAndVerifyShippingUrl(expectShippingPolicyText: string) {
        await this.web.clickElement(cartPage.shippingLink)
        const actualShippingPolicyText = await this.web.getText(cartPage.shippingPolicy);
        await this.web.compareValues(actualShippingPolicyText, expectShippingPolicyText);
        await this.web.takeScreenshot('screenshots/shippingPolicy.png');
    }

    //Method to verify cart is empty
    async verifyCartIsEmpty(expectedCartEmptyText: string) {
        const actualCartEmptyText = await this.web.getText(cartPage.cartEmptyText);
        await this.web.verifyValueContains(actualCartEmptyText, expectedCartEmptyText);
        await this.web.takeScreenshot('screenshots/cartIsEmpty.png');
    }

    //Method to click on continue shopping button
    async clickOnContinueShoppingButton() {
        await this.web.clickElement(cartPage.continueShoppingButton);
        await this.web.takeScreenshot('screenshots/continueShoppingClicked.png');
    }



}