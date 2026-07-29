import { test, TestInfo } from '@playwright/test';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { WallPaintingsAndWalls } from '../../page-objects/page-steps/wallPaintingsAndWalls-page-steps.js';
import { CartPageSteps } from '../../page-objects/page-steps/cart-page-steps.js';

import data from '../../testdata/ui/data.json' with {type: 'json'};


let homePage: HomePageSteps;
let wallPaintingsAndWallsPage: WallPaintingsAndWalls;
let cartPage: CartPageSteps;
let testData: any;
let testInfo: TestInfo;


test.describe('Autoamting testcase-2', () => {

    //Initialize the page objects delivery test case. 
    test.beforeEach(async ({ page }) => {
        homePage = new HomePageSteps(page);
        wallPaintingsAndWallsPage = new WallPaintingsAndWalls(page)
        cartPage = new CartPageSteps(page)
    });

    //Test Case 1: Verify User is Logged in 
    test('Verify Testcase-2', async () => {

        testData = data["Verify Testcase-2"];

        
        //Lunch Application
        await homePage.launchApplication();
        // await homePage.setWindowSize();

        //Verify HomePage is displayed
        await homePage.verifyHomePageDisplayed();

        //User hover on Decor Option
        await homePage.hoverOnDecor();

        //User click on wall Paintings And Walls
        await homePage.clickOnWallPaintingsAndWall();

        //Verify user is landed on wall Paintings And Walls Page
        await wallPaintingsAndWallsPage.verifyWallPaintingsAndWallsPage(testData["wallPaintingsAndWallsText"])

        //Apply price filter
        await wallPaintingsAndWallsPage.clickOnPriceFilter();

        //Enter price in the filter textbox
        await wallPaintingsAndWallsPage.enterPrice(testData["price"]);

        //Hit Enter Key 
        await wallPaintingsAndWallsPage.pressEnter();

        //Click on Availability filter
        await wallPaintingsAndWallsPage.clickOnAvailabilityFilter();

        //Check the Instock Checkbox
        await wallPaintingsAndWallsPage.checkInStockCheckBox();

        //Click on "Sort By: Featured" Dropdown and select value "Price, low to high"
        await wallPaintingsAndWallsPage.SelectValueFromDowpdown(testData["dropdownValue"])

        //Click on "Sort By: Featured" Dropdown and select value "Best Selling"
        await wallPaintingsAndWallsPage.SelectValueFromDowpdown(testData["secondDropdownValue"])

        //Click on Compare
        await wallPaintingsAndWallsPage.clickOnCompareButton();

        //Verify Clear ALL link is visible
        await wallPaintingsAndWallsPage.verifyClearAllLink();

        //verify number of Products are showing
        await wallPaintingsAndWallsPage.verifyNumberOfProduct();

        //Click on celar ALL
        await wallPaintingsAndWallsPage.clickOnClearALLButton();

    });

});