import { Page } from "@playwright/test";
import productPage from '../page-locators/product-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";
import config from '../../config/config.json' with {type: 'json'};

export class ProductPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify the product count
    async verifyProductCount(expectedCount: string) {
        const actualCount: string | null = await this.web.getText(productPage.productCount)
        await this.web.verifyValueContains(actualCount, expectedCount)
    }

    //Method to click on the 1st product
    async clickOnFirstProduct() {
        await this.web.clickElement(productPage.firstProduct)
    }

    //Method to verify Product page URL
    async verifyProductPageUrl(expectedURL: string) {
        await this.web.verifyUrlContains(expectedURL)
    }

    //Method to verify product title
    async verifyProdcutTitle(expectedTitle: string) {
        const actualTitle = await this.web.getText(productPage.productTitle)
        await this.web.verifyValueContains(actualTitle, expectedTitle)
    }

    //Method to verify product price
    async verifyProdcutPrice(expectedPrice: string) {
        const actualPrice = await this.web.getText(productPage.productPrice)
        console.log(`actual Price ${actualPrice}`)
        console.log(`expected Price ${expectedPrice}`)
        await this.web.verifyValueContains(actualPrice, expectedPrice)
    }

    //Method to increase product the quantity
    async increaseQunatity() {
        await this.web.clickElement(productPage.increaseQuantity)
    }

    //Method to click on add to cart
    async clickOnAddToCart(){
        await this.web.clickElement(productPage.addToCart)
    }

}