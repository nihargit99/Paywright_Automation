import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { CutleryPageSteps } from '../../page-objects/page-steps/curtlery-page-steps.js';
import data from '../../testdata/ui/data.json' with {type: 'json'};

let homePage: HomePageSteps;
let cutleryPage: CutleryPageSteps;
let testData: any;
let testInfo: TestInfo;

test.describe('Autoamting testcase-4', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
        cutleryPage = new CutleryPageSteps(page);
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
        await cutleryPage.clickOnPleaseFillTheForm();

        //Wait for the new page to load
        // Verify the new page url
        //Verify the new page text
        // Enter "demo Tester" in the "Name" field
        //Enter "9876543210" in the "Phone Number" field
        //Enter "demo@gmail.com" in the "Email" field
        //Enter "5" in the "Quantity" field
        //Check the "Office" checkbox under purpose
        //Check the "Home" checkbox under purpose
        //Click the status field dropdown and select "Done" option
        //Click the "Submit" button

        //This above tasks need to be done
        

    });

});