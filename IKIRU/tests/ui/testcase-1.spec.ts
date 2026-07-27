import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import data from '../../testdata/ui/data.json' with {type: 'json'};


let homePage: HomePageSteps;
let testData: any;
let testInfo: TestInfo;

test.describe('Creatio CRM UI Tests', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
    });

    //Test Case 1: Verify User is Logged in 
    test('Verify User is Logged in', async () => {
        await homePage.launchApplication();
        await homePage.verifyHomePageDisplayed();
        await homePage.verfiySerachBoxIsClicked();
        await homePage.enterSearchValue();
        await homePage.pressEnter();
    });

});