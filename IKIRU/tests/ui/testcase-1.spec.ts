import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { ProductPageSteps } from '../../page-objects/page-steps/product-page-steps.js';
import { CartPageSteps } from '../../page-objects/page-steps/cart-page-steps.js';
import data from '../../testdata/ui/data.json' with {type: 'json'};


let homePage: HomePageSteps;
let productPage: ProductPageSteps;
let cartPage: CartPageSteps;
let testData: any;
let testInfo: TestInfo;

test.describe('Autoamting testcase-1', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
        productPage = new ProductPageSteps(page)
        cartPage = new CartPageSteps(page)
    });

    //Test Case 1: Verify User is Logged in 
    test('Verify Testcase-1', async () => {

        testData = data["Verify Testcase-1"];

        //Lunch Application
        await homePage.launchApplication();

        //Verify HomePage is displayed
        await homePage.verifyHomePageDisplayed();

        //User clicked on searchBox
        await homePage.verfiySerachBoxIsClicked();

        //User enter value in the searchBox
        await homePage.enterSearchValue();

        //User click on enter key from Keyboard
        await homePage.pressEnter();

        //User vrifying the product count
        await productPage.verifyProductCount(testData["count"]);

        //User Click on the first product
        await productPage.clickOnFirstProduct();

        //User verify the current page URL
        await productPage.verifyProductPageUrl(testData["productURL"]);

        //User verify the product title
        await productPage.verifyProdcutTitle(testData["productTitle"]);

        //User verify the product price
        await productPage.verifyProdcutPrice(testData["productPrice"]);

        //User click on Plus icon to increase the quantity
        await productPage.increaseQunatity();

        //User click on add to cart
        await productPage.clickOnAddToCart();

        //User verify cartpage is displayed
        await cartPage.verifycartPage(testData["cartText"])

        //User is click and verify order Note section
        //**This section is not Coming**

        //User click and verify shipping link 
        await cartPage.clickAndVerifyShippingUrl(testData["shippingPolicy"])


    });

});