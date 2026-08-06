import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { ShopifyPageSteps } from '../../page-objects/page-steps/shopify-page-steps.js';
import { WarrantyAndCancellationPageSteps } from '../../page-objects/page-steps/warrantyAndCancellation-page-steps.js';
import { TermOfServicePageSteps } from '../../page-objects/page-steps/termsOfService-page-steps.js';
import data from '../../testdata/ui/data.json' with {type: 'json'};

let homePage: HomePageSteps;
let shopifyPage: ShopifyPageSteps;
let testData: any;
let warrantyAndCancellationPage: WarrantyAndCancellationPageSteps;
let termOfServicePage: TermOfServicePageSteps;
let testInfo: TestInfo;

test.describe('Autoamting testcase-6', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
        warrantyAndCancellationPage= new WarrantyAndCancellationPageSteps(page);
        termOfServicePage= new TermOfServicePageSteps(page);

    });

    //Test Case 6: Verify User is Logged in 
    test('Verify Testcase-6', async () => {

        testData = data["Verify Testcase-6"];

        //Lunch Application
        await homePage.launchApplication();
        // await homePage.setWindowSize();

        //Verify HomePage is displayed
        await homePage.verifyHomePageDisplayed();

        // Save the original page
        const originalPage = homePage.page;

        //Scroll down to footer and click on Powered By shopify
        const newPage = await homePage.clickOnPoweredByShopify()

        // Create the Page Object using the new tab
        shopifyPage = new ShopifyPageSteps(newPage);

        // Verify the new page text
        await shopifyPage.verifyNewPageUrl(testData["newPageUrl"]);

        //Click on Start for free
        await shopifyPage.clickOnStartForFree();

        //verify the page text
        await shopifyPage.verifyStartYourFreeTrailText(testData["startYourFreeTrialText"]);

        //Verify email filed is visible
        await shopifyPage.verifyEmailFiledIsVisible();

        //click on continue with Email
        await shopifyPage.clickOnContinueWithEmail();

        // Close the Shopify tab
        await newPage.close();

        //Navigate back to homePage
        await originalPage.bringToFront();

        //Click on Warranty And Cancellation
        await homePage.clickOnWarrantyAndCancellation();

        //verify the warrent text is present
        await warrantyAndCancellationPage.verifyWarrantyText(testData["warrantText"])

        //Navigate back to home screen
        await warrantyAndCancellationPage.goBackToHomeScreen();

        //Click on Terms of service
        await homePage.clickOntermsOfService();

        //Verify the TermsOfService text is present
        await termOfServicePage.verifyTermsOfServiceText(testData["TermsOfServiceText"]);

        //Verify the TermsOfService URL is present
        await termOfServicePage.verifyTermsOfServiceURL(testData["TermsOfServiceURL"]);

        //Click on Privacy Policy
        await termOfServicePage.clickOnPrivacyPolicy()

    });

});