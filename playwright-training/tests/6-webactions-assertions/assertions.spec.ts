

import { test, expect } from '@playwright/test';

// test('Hard Assertions', async ({ page }) => {
    
//     //Launch the application
//     await page.goto('https://www.google.com/');

//     //Verify the page title
//     await expect(page).toHaveTitle("Google2");
//     console.log("Page title verified successfully. ");

//     //Verify the page URL
//     await expect(page).toHaveURL("https://www.google.com/");
//     console.log("Page URL verified successfully. ");

//     console.log("Execution completed successfully. ");
// });

test('Soft Assertions', async ({ page }) => {
    
    //Launch the application
    await page.goto('https://www.google.com/');

    //Verify the page title
    await expect.soft(page).toHaveTitle("Google2");
    console.log("Page title verified successfully. ");

    //Verify the page URL
    await expect.soft(page).toHaveURL("https://www.google2.com/");
    console.log("Page URL verified successfully. ");

    console.log("Execution completed successfully. ");
});

