import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { DiningTableSteps } from '../../page-objects/page-steps/dining-table-page-steps.js';

import data from '../../testdata/ui/data.json' with {type: 'json'};


let homePage: HomePageSteps;
let diningTablePage: DiningTableSteps;
let testData: any;
let testInfo: TestInfo;


test.describe('Autoamting testcase-3', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
        diningTablePage = new DiningTableSteps(page);
    });

    //Test Case 3: Verify User is Logged in 
    test('Verify Testcase-3', async () => {

        testData = data["Verify Testcase-3"];

        //Lunch Application
        await homePage.launchApplication();
        // await homePage.setWindowSize();

        //Verify HomePage is displayed
        await homePage.verifyHomePageDisplayed();

        //User hover on Furniture Option
        await homePage.hoverOnFurniture();

        //User click on Dining Table Option
        await homePage.clickOnDiningTable();

        //User Verify Dining Table Page is displayed
        await diningTablePage.verifyDiningTablePage(testData["diningTableText"]);

        //User Verify Product Count is displayed
        await diningTablePage.verifyProductCountDisplayed(testData["prodCount"]);

        //USer click on the first product
        await diningTablePage.clickOnFirstProduct();

        //User click on the share(arraow) icon
        await diningTablePage.clickOnShareIcon();

        //User Verify Share Popup is displayed
        await diningTablePage.verifySharePopupDisplayed(testData["sharePopupText"]);

        //USer click on the copy button
        await diningTablePage.clickOnCopyButton();

        //User Verify Copied Button Text is displayed
        await diningTablePage.verifyCopiedButtonText(testData["copiedButtonText"]);

        //User click on the close button
        await diningTablePage.clickOnCloseButton();

        //User enter the pin code in the input field
        await diningTablePage.enterPinCode(testData["pinCode"]);

        //User click on the check button
        await diningTablePage.clickOnCheckButton();

        //User clear the input field
        await diningTablePage.clearInputField();

        //User enter the valid pin code in the input field
        await diningTablePage.enterValidPinCode(testData["validPinCode"]);

        //User click on the check button
        await diningTablePage.clickOnCheckButton();

        //user Verify Delivery Message is displayed
        await diningTablePage.verifyDeliveryMessage(testData["deliveryMessage"]);

    });

});