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
    }

    //Method to click and verify shipping link
    async clickAndVerifyShippingUrl(expectShippingPolicyText: string) {
        await this.web.clickElement(cartPage.shippingLink)
        const actualShippingPolicyText = await this.web.getText(cartPage.shippingPolicy)
        await this.web.compareValues(actualShippingPolicyText, expectShippingPolicyText)
    }

}