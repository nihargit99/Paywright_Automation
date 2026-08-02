import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { CartPageSteps } from '../../page-objects/page-steps/cart-page-steps.js';
import { ProductPageSteps } from '../../page-objects/page-steps/product-page-steps.js';
import { TipsAndHacksPageSteps } from '../../page-objects/page-steps/tips-and-hacks-page-steps.js';
import { CareersATIKIRUPageSteps } from '../../page-objects/page-steps/CareersATIKIRU-page-steps.js';
import data from '../../testdata/ui/data.json' with {type: 'json'}; 


let homePage: HomePageSteps;
let cartPage: CartPageSteps;
let productPage: ProductPageSteps;
let tipsAndHacksPage: TipsAndHacksPageSteps;
let careersATIKIRUPage: CareersATIKIRUPageSteps;
let testData5: any;
let testData1: any;
let testInfo: TestInfo;

test.describe('Autoamting testcase-5', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
        cartPage = new CartPageSteps(page);
        productPage = new ProductPageSteps(page);
        tipsAndHacksPage = new TipsAndHacksPageSteps(page);
        careersATIKIRUPage = new CareersATIKIRUPageSteps(page);
    });

    //Test Case 5: Verify User is Logged in 
    test('Verify Testcase-5', async () => {

        testData5 = data["Verify Testcase-5"];
        testData1 = data["Verify Testcase-1"];

        //Lunch Application
        await homePage.launchApplication();
        // await homePage.setWindowSize();

        //Verify HomePage is displayed
        await homePage.verifyHomePageDisplayed();

        //User click on cart icon
        await homePage.clickOnCartIcon();

        //User Verify Cart Page is displayed
        await cartPage.verifycartPage(testData1["cartText"]);

        //User Verify Empty Cart text is displayed
        await cartPage.verifyCartIsEmpty(testData5["emptyCartText"]);

        //User click on continue shopping button
        await cartPage.clickOnContinueShoppingButton();

        //verify product page is displayed 
        await productPage.verifyProductPage(testData5["productPageText"]);

        //Scroll to buttom and click on Blog under useful links
        await productPage.clickOnBlogUnderUsefulLinks();

        //Verify Tips and Hacks page is displayed
        await tipsAndHacksPage.verifyTipsAndHacksPage(testData5["tipsAndHacksText"]);

        //Click on Read More button
        await tipsAndHacksPage.clickOnReadMoreButton();

        //Click on Home button and go back to Home page
        await tipsAndHacksPage.clickOnHomeButton();

        // Scroll to buttom Click on Careers at Ikiru link
        await homePage.clickOnCareersAtIkiruLink();

        //Verify Careers at Ikiru page is displayed
        await careersATIKIRUPage.verifyCareersATIKIRUPage(testData5["careersATIKIRUText"]);

        //Hover on Hamberger menu
        await careersATIKIRUPage.hoverOnHambergerMenu();

        //Click on Apply now
        await careersATIKIRUPage.clickOnapplyNow();

        //Click on Saerch Icon
        await careersATIKIRUPage.clickOnSearchIcon();

        //Search for Manager
        await careersATIKIRUPage.searchManager(testData5["searchValue"]);

        //Click on firstItem
        // await careersATIKIRUPage.clickOnFirstItem();

        //verify Manager word is there


    });

});