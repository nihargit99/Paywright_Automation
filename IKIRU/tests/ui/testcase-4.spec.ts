import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { CutleryPageSteps } from '../../page-objects/page-steps/curtlery-page-steps.js';
import { Cutlery1PageSteps } from '../../page-objects/page-steps/curtlery1-page-steps.js';
import data from '../../testdata/ui/data.json' with {type: 'json'};

let homePage: HomePageSteps;
let cutleryPage: CutleryPageSteps;
let cutlery1Page: Cutlery1PageSteps;
let testData: any;
let testInfo: TestInfo;

test.describe('Autoamting testcase-4', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
        cutleryPage = new CutleryPageSteps(page);
        // cutlery1Page = new Cutlery1PageSteps(page);
    });

    //Test Case 4: Verify User is Logged in 
    test('Verify Testcase-4', async () => {

        testData = data["Verify Testcase-4"];

        //Lunch Application
        await homePage.launchApplication();
        // await homePage.setWindowSize();

        //Verify HomePage is displayed
        await homePage.verifyHomePageDisplayed();

        //User hover on Furniture Option
        await homePage.hoverOnKitchenware();

        //User click on Dining Table Option
        await homePage.clickOnCutlery();

        //User Verify Dining Table Page is displayed
        await cutleryPage.verifyCutleryPage(testData["cutleryText"]);

        //User click on first product in cutlery page
        await cutleryPage.clickOnFirstProduct();

        //User click on "Need Any Help OR Want to buy this in bulk?"
        await cutleryPage.clickOnNeedAnyHelpORWanttobuythisinbulk();

        //User Verify Contact Info is displayed
        await cutleryPage.verifyContactInfoDisplayed(testData["contactInfoText"]);

        //User click on "Please Fill the Form"
        // await cutleryPage.clickOnPleaseFillTheForm();
        const newPage = await cutleryPage.clickOnPleaseFillTheForm();

        // Create the Page Object using the new tab
        cutlery1Page = new Cutlery1PageSteps(newPage);

        // Verify the new page url
        await cutlery1Page.verifyUrlContains(testData["pageUrl"]);

        // Verify the new page text
        await cutlery1Page.verifyCutleryPageText(testData["pageText"]);

        //User click on close cookie popup
        await cutlery1Page.closeCookiePopup();

        // Enter "demo Tester" in the "Name" field
        await cutlery1Page.enterName(testData["name"]);

        //Enter "9876543210" in the "Phone Number" field
        await cutlery1Page.enterPhoneNumber(testData["phoneNumber"]);

        //Enter "demo@gmail.com" in the "Email" field
        await cutlery1Page.enterEmail(testData["email"]);

        //Enter "5" in the "Quantity" field
        await cutlery1Page.enterQuantity(testData["quantity"]);

        //Check the "Office" and "Home" checkbox under purpose
        await cutlery1Page.checkPurposeCheckboxes();

        //Click the status field dropdown and select "Done" option
        await cutlery1Page.selectStatusOption(testData["dropdownValue"]);

        //Click the "Submit" button
        await cutlery1Page.clickSubmitButton();

    });

});